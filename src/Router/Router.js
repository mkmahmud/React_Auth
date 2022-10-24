import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import Login from '../Auth/Login/Login';
import SignUp from '../Auth/SignUp/SignUp';
import Main from '../Layout/Main';

const Router = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children: [
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
          ]
        },
      ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Router;