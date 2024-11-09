import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from './userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './utils/firebase'
const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        { path: "/", 
          element:<Login />
        },
        { path:"/browse",
          element:<Browse />
        }
    ])

    useEffect(()=>
    {
      onAuthStateChanged(auth, (user) => {
        // user sign in
        if (user) {
         
          const {uid,email, password,photoURL}= user;
           dispatch(addUser({uid:uid, email:email, password: password,photoURL:photoURL}));
          
        } else {
           // sign out
           dispatch(removeUser());

        }
      })

    },[])

  return (
    <div>
     
     <RouterProvider router ={appRouter}/>

    </div>
  )
}

export default Body;