// render header component.
// render login button on header 
// render cart item == 0 
import { Provider } from "react-redux";
import Header from "../Header";
import { render } from "@testing-library/react";
import appStore from './utils/store/appStore';
import { BrowserRouter } from "react-router-dom";

test ("should render header component", ()=>{
   <BrowserRouter>
   <Provider store={appStore}>
        render(<Contact />);
    </Provider>
    </BrowserRouter>




})