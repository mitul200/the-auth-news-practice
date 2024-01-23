/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app)

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [loding , setLoding] = useState(true)

    const creatUser =(email , password)=>{
      return  createUserWithEmailAndPassword(auth , email , password)
        
    }

    const handelSingIn=(email, password)=>{
        return signInWithEmailAndPassword(auth , email , password)

    }

    const logOut = ()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth , currentUser =>{
          console.log(currentUser)
          setUser(currentUser)
          setLoding(false)
           
        })
        return ()=>{
          return unsubcribe ()
        }
      },[])

    

    // const user = {
    //     email:'mitul@2004444'
    // }

    const authInfo ={
        creatUser,handelSingIn,user,logOut,loding
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;