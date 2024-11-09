import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from './utils/firebase';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log("user", user)
  const handleSignOut = () =>
  {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
     
      navigate("/error");
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row flex justify-between">

        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
          className='w-44 mx-auto md:mx-0'
        alt="logo"/>
        {user && <div className='flex p-2'>
          <img className="w-12 h-12 rounded-full" src={user?.photoURL}
            alt="userIcon"
          />
          <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>}
     
    </div>
  )
}

export default Header;