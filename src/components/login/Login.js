import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import jwt_decode from 'jwt-decode';
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { LoginContext } from '../../App';
import googleIcon from '../../images/googleIcon.png';
import '../../styles/login.css';
import Navbar from '../home/Navbar';
import firebaseConfig from './firebaseConfig';
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

// check is user logged in
export const isLoggedIn = () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      return false;
    }
    const decodedToken = jwt_decode(token);
    // console.log(decodedToken)
    // get current time
    const currentTime = new Date().getTime() / 1000;
    // compare the expiration time with the current time
    // will return false if expired and will return true if not expired
    return decodedToken.exp > currentTime;
  };
  // Sign Out handler:
export const handleSignOut = () => {
    const auth = getAuth();
    return auth()
      .signOut()
      .then((res) => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          error: '',
          success: false,
        };
        return signedOutUser;
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage);
      });
  };

function Login() {
    const [loggedInUser, setLoggedInUser] = useContext(LoginContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: null,
        email: null,
        password: null,
        cPassword: null,
    });
    const [errmessage, setErrMessage] = useState({
        formErrors: {}
    });
    // form validation rules 
    console.log(newUser);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formValidation()) {

            if (newUser && user.email && user.password) {
                const auth = getAuth();
                return createUserWithEmailAndPassword(auth, user.email, user.password)
                    .then((userCredential) => {
                        let newUserinfo = { ...user };
                        newUserinfo.isSignedIn = true;
                        newUserinfo.error = '';
                        newUserinfo.success = true;
                        setUser(newUserinfo);
                        updateUserName(user.name);
                        setLoggedInUser(newUserinfo);
                        history.replace(from);
                    })
                // .catch((error) => {
                //     const newUserinfo = {};
                //     newUserinfo.error = error.message
                //     return newUserinfo;
                // });
            }
            if (!newUser && user.email && user.password) {
                const auth = getAuth();
                signInWithEmailAndPassword(auth, user.email, user.password)
                    .then((userCredential) => {
                        let newUser = { ...userCredential.user };
                        newUser.isSignedIn = true;
                        newUser.error = '';
                        newUser.success = true;
                        setUser(newUser);
                        setLoggedInUser(newUser);
                        storeAuthToken();
                        history.replace(from);
                    })
                // .catch((error) => {
                //     const newUserInfo = {};
                //     newUserInfo.error = error.message;
                //     newUserInfo.success = false;
                //     return newUserInfo;
                // });
            }

        }

    }
    const handleInputChange = (e) => {
        let newUserInfo = { ...user };
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
    }
    console.log(user);
    const formValidation = () => {
        let formErrors = {};
        let formIsValid = true;
        //Name field
        if (!user.name) {
            formIsValid = false;
            formErrors["name"] = "Name is required.";
        }
        if (user.name == !null && user.name !== undefined) {
            formIsValid = true;
            formErrors["name"] = "";
        }
        if (!newUser && !user.name) {
            formIsValid = true;
            formErrors["name"] = "";
        }
        //Email field
        if (!user.email) {
            formIsValid = false;
            formErrors["email"] = "Email is required.";
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email))) {
            formIsValid = false;
            formErrors["email"] = "Email not valid";
        }
        if (user.email) {
            formIsValid = true;
            setErrMessage("");
        }
        //Password field
        if (!user.password) {
            formIsValid = false;
            formErrors["password"] = "Password is required.";
        }
        if (!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(user.password))) {
            formIsValid = false;
            formErrors["password"] = "Minimum eight characters, at least one letter and one number";
        }
        if (user.password) {
            formIsValid = true;
            formErrors["password"] = "";
        }
        //Confirm password field
        if (!user.cPassword) {
            formIsValid = false;
            formErrors["cPassword"] = "Confirm password is required.";
        }
        if (!newUser && !user.cPassword) {
            formIsValid = true;
            formErrors["name"] = "";
        }
        setErrMessage({ formErrors: formErrors });


        return formIsValid;
    }

    const googleSignin = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    name: displayName, email: email, success: true
                }
                storeAuthToken();
                return signedInUser;
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    };
    const updateUserName = name => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((res) => {
            console.log('update display name')
        }).catch((error) => {
            console.log((error.message));
        });
    }

    // Handle Response
    const handleResponse = (res, redirect) => {
        //console.log(res.error)
        if (res.error) {
            newUser && setErrMessage["resErr"](res.error);
            !newUser && setErrMessage["resErr"](res.error);
        } else {
            setUser(res);
            setLoggedInUser(res)
            redirect && history.replace(from);
            newUser && setErrMessage("")
            !newUser && setErrMessage("")
        }
    }
    const storeAuthToken = () => {
        getAuth()
          .currentUser.getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          })
          .catch(function (error) {
            // Handle error
          });
      };
      
    console.log(user)
    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar />
            </div>
            <div className="row">
                <div className="col-md-6 login-container">
                    <div className="col-md-12">
                        <p>{newUser ? (<span>Create Account</span>) : (<span>Login</span>)}</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                            {
                                newUser &&
                                <div className="col">
                                    <label>Name</label>
                                    <input name="name" type="text"
                                        onChange={handleInputChange}
                                        value={user.name}
                                        className={`form-control ${errmessage.formErrors.name ? ' showError' : ''}`} />
                                    {errmessage.formErrors.name &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{errmessage.formErrors.name}</div>
                                    }
                                </div>}
                            <div className="col">
                                <label>Email</label>
                                <input name="email" type="text"
                                    onChange={handleInputChange}
                                    value={user.email}
                                    className={`form-control ${errmessage.formErrors.email ? ' showError' : ''}`} />
                                {errmessage.formErrors.email &&
                                    <div style={{ color: "red", paddingBottom: 10 }}>{errmessage.formErrors.email}</div>
                                }
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col">
                                <label>Password</label>
                                <input name="password" type="password"
                                    onChange={handleInputChange}
                                    value={user.password}
                                    className={`form-control ${errmessage.formErrors.password ? ' showError' : ''}`} />
                                {errmessage.formErrors.password &&
                                    <div style={{ color: "red", paddingBottom: 10 }}>{errmessage.formErrors.password}</div>
                                }
                            </div>
                            {newUser &&
                                <div className="col">
                                    <label>Confirm Password</label>
                                    <input name="cPassword" type="password"
                                        onChange={handleInputChange}
                                        value={user.cPassword}
                                        className={`form-control ${errmessage.formErrors.cPassword ? ' showError' : ''}`} />
                                    {errmessage.formErrors.cPassword &&
                                        <div style={{ color: "red", paddingBottom: 10 }}>{errmessage.formErrors.cPassword}</div>
                                    }
                                </div>
                            }
                        </div>
                        <div className="row g-0 p-2">
                            <div className="col justify-content-around">
                                <button type="submit" className="btn btn-primary mr-5">Submit</button>
                                {/* <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button> */}
                            </div>
                            <div className="col">
                                {newUser ? <h6>Already have an account?<span style={{ fontWeight: 'bolder', color: 'tomato', cursor: 'pointer' }} onClick={() => setNewUser(!newUser)} > Login</span> </h6> : <h6>Don't have an account <span style={{ fontWeight: 'bolder', color: 'tomato', cursor: 'pointer' }} onClick={() => setNewUser(!newUser)}>Sign Up</span></h6>}
                                {/* <p style={{ color: "red" }}>{user.error}</p> */}
                            </div>
                        </div>
                    </form>
                    <div className="col-md-12 ">
                        <div className='social-login align-items-center justify-content-center'>
                            <span>OR</span>
                            <button className="btn" onClick={googleSignin}>
                                <img src={googleIcon} alt='google icon' />{' '}
                                <span>Continue with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
