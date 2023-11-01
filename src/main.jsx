import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/SignUp/Signup';
import AuthProviders from './providers/AuthProviders';
import BookService from './Components/Pages/CheckOut/BookService';
import Bookings from './Components/Pages/Bookings/Bookings';
import PrivateRoutes from './Protected/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/bookservice/:id",
        element: <BookService></BookService>,
        loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/bookings",
        element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='lg:w-3/4 mx-auto font-inter'>
    <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </React.StrictMode>,
  </div>
)
