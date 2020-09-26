import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB4YkgWsposshpS9_hhdrN23eK35fRNfj4",
    authDomain: "react-ecommerce-274d2.firebaseapp.com",
    databaseURL: "https://react-ecommerce-274d2.firebaseio.com",
    projectId: "react-ecommerce-274d2",
    storageBucket: "react-ecommerce-274d2.appspot.com",
    messagingSenderId: "5859265060",
    appId: "1:5859265060:web:6adb5c1680c7cf0f67a6b1",
    measurementId: "G-58XZ27Q44B"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exitst){
    const {displayName, email} = userAuth;
    const createdDate = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData
      });
    }catch(error){
      console.log('Error creating user', error.message);
    }

  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
