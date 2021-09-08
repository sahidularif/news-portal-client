import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { LoginContext } from '../../App';
import '../../styles/login.css';
import Navbar from '../home/Navbar';
import firebaseConfig from './firebaseConfig';
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export const sessionInfo = () => {
    const email = sessionStorage.getItem('email');
    if (email) {
        return email;
    }
};

const Login = () => {
    const [newUser, setNewuser] = useState(true);
    const [errmessage, setErrMessage] = useState('');
    const [user, setUser] = useState({
        isSignedIn: false,
        displayName: '',
        email: '',
        password: '',
        error: ''
    })

    console.log(user);
    const [loggedInUser, SetLoggedInUser] = useContext(LoginContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const getInfo = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            let validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.target.value)
            if (validPass) {
                setErrMessage('')
                let userPass = { ...user }
                userPass.password = e.target.value
                setUser(userPass)
            }
            else { setErrMessage('Minimum eight characters, at least one letter and one number') }
        }
        if (e.target.name === 'confirmPassword') {
            if (e.target.value === user.password) {
                let userPass = { ...user }
                userPass.password = e.target.value
                setUser(userPass)
                setErrMessage('')
            }
            else { setErrMessage('Password not Match With Privious One') }
        }

        if (isFormValid) {
            const newUser = { ...user }
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }
    const submitData = (e) => {
        if (newUser && user.email && user.password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    const newUserinfo = { ...user };
                    newUserinfo.isSignedIn = true;
                    newUserinfo.error = '';
                    newUserinfo.success = true;
                    setUser(newUserinfo);
                    updateUserName(user.displayName);
                    SetLoggedInUser(newUserinfo);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserinfo = { ...user };
                    newUserinfo.error = error.message
                    setUser(newUserinfo);
                });
        }
        if (!newUser && user.email && user.password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    const newUser = { ...userCredential.user };
                    newUser.isSignedIn = true;
                    newUser.error = '';
                    newUser.success = true;
                    setUser(newUser);
                    SetLoggedInUser(newUser);
                    sessionLogin(user.email)
                    history.replace(from);
                })
                .catch((error) => {
                    const newUser = { ...user };
                    newUser.error = error.message
                    setUser(newUser);
                });
        }
        e.preventDefault();
    }

    const googleSignin = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    displayName,
                    email
                }
                setUser(signedInUser);
                SetLoggedInUser(signedInUser);
                sessionLogin(result.user.email);
                history.replace(from);
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const updateUserName = name => {
        const user = initializeApp.auth().currentUser;

        user.updateProfile({
            displayName: name,
        }).then(function () {
            console.log("congrates")
        }).catch(function (error) {
            console.log(error)
        });
        console.log(name);
    }
    const sessionLogin = (email) => {
        sessionStorage.setItem("email", email);
    }

    return (
        <div className='home'>
            <div className='container'>
                <Navbar />
                <div className='container-fluid w-50 text-center text-dark mt-5 login-container justify-content-center'>
                    <div className="col-md-12 log-title"> {newUser ? <h5>Create Your Account</h5> : <h5>Login</h5>}</div>
                    <form onSubmit={submitData} className='text-center mt-5 justify-content-center'>
                        {newUser && <input onBlur={getInfo} type="name" className="form-control rounded-pill mb-3" name="displayName" placeholder='Name' required />
                        }
                        <input onBlur={getInfo} type="email" className="form-control rounded-pill mb-3" name="email" placeholder='Email' required />
                        <input onBlur={getInfo} type="password" className="form-control rounded-pill mb-3" name="password" placeholder="Password" required />
                        {newUser && <input onBlur={getInfo} type="password" className="form-control rounded-pill mb-3" name="confirmPassword" placeholder="Confirm Password" required />}
                        <p>{errmessage}</p>

                        <input type="submit" className=" form-control submit_button" value={newUser ? 'Sign Up' : 'Login'} />
                    </form>
                    <div>
                        {newUser ? <p>Already have an account?<span style={{ fontWeight: 'bolder', color: 'tomato', cursor: 'pointer' }} onClick={() => setNewuser(!newUser)} > Login</span> </p> : <p>Don't have an account <span style={{ fontWeight: 'bolder', color: 'tomato', cursor: 'pointer' }} onClick={() => setNewuser(!newUser)}>Sign Up</span></p>}
                        <p style={{ color: "red" }}>{user.error}</p>
                        {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Logged In'} successfully</p>}
                    </div>
                </div>
                <div className='container text-center' >
                    <button onClick={googleSignin} className="btn text-dark w-25 border m-3 rounded-pill">Continue with Google</button>

                </div>
            </div>
        </div>

    );
};

export default Login;