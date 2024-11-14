import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import './index.css';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Body from './src/components/Body';
import Error from './src/components/Error';
import About from './src/components/About';
import Contact from './src/components/Contact';
import RestaurantMenu from './src/components/RestaurantMenu';

const Grocery = lazy(()=>import ('./src/components/Grocery')) ;

const App = ()=>{
    return(
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
       {
        path: "/",
        element:<Body/>
       },
       {
        path: "/about",
        element: <About />
       },
       {
        path: "/contact",
        element: <Contact />
       },
       {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
       },
       {
        path: "/grocery",
        element: <Grocery />
       }
       
      ],
      errorElement: <Error />
    },
  ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}  />);