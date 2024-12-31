// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { collection, getFirestore ,addDoc } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWZGJBuQkK75RW4R5Kt-V2TKt4bkGlkQk",
  authDomain: "netflix-clone-f21aa.firebaseapp.com",
  projectId: "netflix-clone-f21aa",
  storageBucket: "netflix-clone-f21aa.firebasestorage.app",
  messagingSenderId: "757216101517",
  appId: "1:757216101517:web:998fd10f94a48c36240ec4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider:"local",
            email,
            });        
    }
    catch(error){
        console.error(error);
        alert(error);
    }
};
const login = async (email,password)=> {
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }
    catch(error){
        console.log(error);
        alert(error);
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, signup, login, logout};