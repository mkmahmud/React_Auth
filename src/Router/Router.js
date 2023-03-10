import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from '../Auth/Login/Login';
import SignUp from '../Auth/SignUp/SignUp';
import Block1 from '../Block/Block1';
import Blog from '../Blog/Blog';
import CheckOut from '../CheckOut/CheckOut';
import CourseDetails from '../Courses/CourseDetails/CourseDetails';
import Courses from '../Courses/Courses';
import Mainbar from '../Courses/Mainbar';
import Faq from '../Faq/Faq';
import CoursesList from '../Layout/CoursesList';
import Main from '../Layout/Main';
import NotFound from '../NotFound/NotFound';
import App from '../PDF/App';
import Slider from '../Slider/Slider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const Router = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element:<>
          <Slider></Slider>
          <Block1></Block1>
          </>
        },
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
            return fetch('https://dragon-news-server-module-62-mkmahmud.vercel.app/category')
          },
          element: <Courses></Courses>
        },
        {
          path:'/courses/:id',
          loader: async({params}) => {
            return fetch(`https://dragon-news-server-module-62-mkmahmud.vercel.app/courses/${params.id}`)
          },
          element:<CourseDetails></CourseDetails>
        },
        {
          path:'/checkout/:id',
          loader: async({params}) => {
            return fetch(`https://dragon-news-server-module-62-mkmahmud.vercel.app/courses/${params.id}`)
          },
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/faq',
          element:<Faq></Faq>
        },
        {
          // Pdf file check
          path:'/pdf',
          element:<App></App>
        }
      ]
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default Router;