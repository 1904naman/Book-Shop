import { createContext , useContext , useState , useEffect } from "react";
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider , signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import {getFirestore, collection,addDoc ,getDocs,doc,getDoc,query,where} from "firebase/firestore";
import { getStorage,ref, uploadBytes,getDownloadURL } from "firebase/storage";


const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyByGo95eejYoixiutwJxZ-y6Mq9j8qmvgo",
    authDomain: "bookers-abd5f.firebaseapp.com",
    projectId: "bookers-abd5f",
    storageBucket: "bookers-abd5f.appspot.com",
    messagingSenderId: "351060218577",
    appId: "1:351060218577:web:d68885d4e1696349e6ebf0"
  };

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth =getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const firestore=getFirestore(firebaseApp);
const  storage=getStorage(firebaseApp);

export const FirebaseProvider = (props) => {

    const[user,setUser] =useState(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if(user) setUser(user);
            else setUser(null);
        });
    } , []);

    const signupUserWithEmailAndPassword = (email,password) =>
    createUserWithEmailAndPassword(firebaseAuth,email,password);

    const signinWithEmailAndPassword=(email,password)=>
    signInWithEmailAndPassword(firebaseAuth,email,password);
    
    const signinWithGoogle = () => signInWithPopup(firebaseAuth,googleProvider);

    const handleCreateNewListing = async (name,isbn,price,cover) =>{
        const imageRef= ref(storage,`uploads/images/${Date.now()}-${cover.name}`);
        const uploadResult= await uploadBytes(imageRef,cover);
     return   await addDoc(collection(firestore,'books'),{
            name,
            isbn,
            price,
            imageURL:uploadResult.ref.fullPath,
            userID:user.uid,
            userEmail:user.email,
            displayName:user.displayName,
            photoURL:user.photoURL,
        });
    };

    const listAllBooks = () => {
        return getDocs(collection(firestore,"books"));
    };

    const getBookById = async (id) => {
        const docRef = doc(firestore, 'books', id);
        const result = await getDoc(docRef);
        return result;
    };

    const getImageURL = (path) => {
        return getDownloadURL(ref(storage,path));
    };

    const placeOrder = async(bookId,qty) => {
        const collectionRef = collection(firestore, "books", bookId, "order");
        const result =await addDoc(collectionRef,{
            userID:user.uid,
            userEmail:user.email,
            displayName:user.displayName,
            photoURL:user.photoURL,
            qty:Number(qty),
        });
        return result;
    };

    const fetchMyBooks = async(userId) => {
        if(!user) return null;
        const collectionRef= collection(firestore,"books");
        const q=query(collectionRef, where("userID", "==" , userId));

        const result=await getDocs(q);
        return result;
    };

    const getOrders = async (bookId) => {
        const collectionRef = collection(firestore, 'books', bookId,'orders');
        const result= await getDocs(collectionRef);
        return result;

    };

    const isLoggedIn = user ? true : false;

    return<FirebaseContext.Provider value={{signupUserWithEmailAndPassword,signinWithEmailAndPassword,signinWithGoogle,handleCreateNewListing ,listAllBooks,getImageURL,getBookById,placeOrder,fetchMyBooks,user,getOrders, isLoggedIn}}>{props.children}</FirebaseContext.Provider>
    
};