import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import './index.css';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Body from './src/components/Body';
import Error from './src/components/Error';
import About from './src/components/About';
import Contact from './src/components/Contact';

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
       }
      ],
      errorElement: <Error />
    },
  ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}  />);