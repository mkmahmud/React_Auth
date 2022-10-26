import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from '../Auth/Login/Login';
import SignUp from '../Auth/SignUp/SignUp';
import CourseDetails from '../Courses/CourseDetails/CourseDetails';
import Courses from '../Courses/Courses';
import Mainbar from '../Courses/Mainbar';
import CoursesList from '../Layout/CoursesList';
import Main from '../Layout/Main';

const Router = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/courses',
          loader: async () => {
            return fetch('http://localhost:5000/category')
          },
          element: <Courses></Courses>
        },
        {
          path:'/courses/:id',
          loader: async({params}) => {
            return fetch(`http://localhost:5000/courses/${params.id}`)
          },
          element:<CourseDetails></CourseDetails>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default Router;