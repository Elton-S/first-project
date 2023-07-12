import { auth , googleProvider} from "../config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import React from "react";


const Auth = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //   console.log(auth?.currentUser?.email);
    //   console.log(auth?.currentUser?.photoURL);
    const signIn = async () => {
      try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        History('/dashbord')
      )
      } catch (err){
        console.error(err);
      }
    };
    const signInWithGoogle = async () => {
        try {
        await signInWithPopup(auth,googleProvider);
        } catch (err){
          console.error(err);
        }
      };
    const logOut = async () => {
        try {
        await signOut(auth);
        } catch (err){
          console.error(err);
        }
      };

return (
    <div className="flex flex-col justify-center">

        <form className="max-w-[400px] md:w-full mx-auto" >
            <h2 className="text-4xl font-bold text-center">Login</h2>
            <div className="flex flex-col py-2">
                <label>Email:</label>

                <input className="rounded-lg mt-2 p-2 border focus:border-blue-500 focus:outline" type="text" name="username" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col py-2">
                <label>Password:</label>

                <input className="rounded-lg mt-2 p-2 border focus:border-blue-500 focus:outline" type="password" name="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="text-gray-600 py-2">
                <p className="items-center "><input className="mr-2" type="checkbox" /> Remember Me</p>
            </div>
            <div>
            <p>Forget Password?</p>
            </div>
            <button className="w-full my-5 py-2 bg-blue-700 shadow-lg text-white hover:shadow-blue-600/30 font-semibold rounded-lg" onClick={signIn}>Login</button>
            {/* <button onClick={signInWithGoogle}> Signin with google</button>
            <button onClick={logOut}> logOut</button> */}
        </form>
    </div>
);

}


export default Auth
