// import React from 'react'
// import Login from './Login'
// import Browse from './Browse'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// const Body = () => {

//     const appRouter = createBrowserRouter([
//         { path: "/", 
//           element:<Login />
//         },
//         { path:"/browse",
//           element:<Browse />
//         }
//     ])

//   return (
//     <div>
     
//      <RouterProvider router ={appRouter}/>

//     </div>
//   )
// }

// export default Body;


import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

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
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;