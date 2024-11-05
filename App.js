import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from "./src/Heading";
import './index.css';


const App = ()=>{
    return(
        <div className='app'>
            hello
            <Heading />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);