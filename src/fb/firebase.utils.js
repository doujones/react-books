import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  
    apiKey: "AIzaSyCHHxRdctv4Hti3VI1t4QVbMoEuGsaLLHY",
    authDomain: "ecommerce-react-2c904.firebaseapp.com",
    databaseURL: "https://ecommerce-react-2c904.firebaseio.com",
    projectId: "ecommerce-react-2c904",
    storageBucket: "",
    messagingSenderId: "613631622626",
    appId: "1:613631622626:web:09fb01c644ff165e"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
if (!userAuth) return;
const userRef = firestore.doc(`users/${userAuth.uid}`)

const snapShot = await userRef.get();
if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    } catch(error){
        console.log("error creating user", error.message);
    }
}

return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;