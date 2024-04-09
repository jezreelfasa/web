import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import Login from "./components/login/Login";
import Registration from './components/registration/Registration';
import Welcome from './components/welcome/welcome';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },

  {
    path: "registration",
    element: <Registration/>
  },
 

  {
    path:"welcome",
    element: <Welcome />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
