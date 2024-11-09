import React , {useState, useRef} from 'react';
import Header from './Header';
import { checkValidData } from "./utils/validate";
import {auth} from "./utils/firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice.js';
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let name = useRef(null);
  let email = useRef(null);
  let password = useRef(null);
  const handleButtonClick = () => {
    
    let name1 = name?.current?.value || "";
    let email1 = email?.current?.value || "";
    let password1 = password?.current?.value || "";
    const message = checkValidData(name1,email1,password1);
    setErrorMessage(message);

    if(message) return;

    // sign in- sign up

  if(!isSignInForm)
  {
    createUserWithEmailAndPassword(auth, email1, password1)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name1, photoURL: "https://avatars.githubusercontent.com/u/54769379?v=4"
    }).then(() => {
      navigate("/browse");
    }).catch((error) => {
        setErrorMessage(error.message);
    });
      
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
  }); 
  }
  else{
    signInWithEmailAndPassword(auth, email1, password1)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const {uid,email, password,photoURL}= auth.currentUser;

    dispatch(addUser({uid:uid, email:email, password: password,photoURL:photoURL}));
          
    navigate("/browse");
 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });

  }
  
    



  };

  const toggleSignInForm = () =>
  {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>

        <Header />
        <div  className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
        </div>
        <form  onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
         
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
    
  )
}

export default Login