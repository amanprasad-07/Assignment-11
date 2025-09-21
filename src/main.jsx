import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import User, {userLoader} from './pages/User';
import NotFound from './pages/NotFound'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {index: true, element: <Home/>},
      {path: "about", element: <About/>},
      {path: "user/:id", element: <User/>, loader: userLoader},
      {path: "*", element: <NotFound/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
 
);
