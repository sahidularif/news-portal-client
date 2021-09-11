import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import firebaseConfig from './firebaseConfig';
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

// Create user with email and password(firebase)
export const createNewUserWithEmailAndPassword = (name, email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const newUserInfo = { };
            newUserInfo.isSignedIn = true;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserName(name);
            return newUserInfo;
        })
        .catch((error) => {
            const newUserinfo = {};
            newUserinfo.error = error.message
            return newUserinfo;
        });
}
// Sign in with email and password(firebase)
export const signInExistingUserWithEmailAndPassword = (email, password) =>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         const newUserInfo = userCredential.user;
         newUserInfo.error = '';
         newUserInfo.success = true;
         return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}
// Google sign in 
export const handleGoogleSignIn = ()=>{
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            const { displayName, email } = result.user;
            const signedInUser = {
                name: displayName, email: email, success: true
            }
            return signedInUser;
        }).catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}
// Update user name
const updateUserName = name =>{
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: name
    }).then((res) => {
      console.log('update display name')
    }).catch((error) => {
      console.log((error.message));
    });
  }
  // Sign out
  export const handleSignOut = ()=>{
    const auth = getAuth();
    return signOut(auth).then((res) => {
      const signOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          error: '',
          success: false
      }
      return signOutUser;
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }