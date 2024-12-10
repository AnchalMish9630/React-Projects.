// render header component.
// render login button on header 
// render cart item == 0 
import { Provider } from "react-redux";
import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import appStore from '../../../utils/store/appStore';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe("renders header compoent", ()=>{
   test ("should render header component", ()=>{
      render(
       <BrowserRouter>
       <Provider store={appStore}>
           <Header />
        </Provider>
        </BrowserRouter>
      )
   }) 
   
   test("should check that login button is present on screen or not", ()=>{
      render(
         <BrowserRouter>
         <Provider store={appStore}>
         <Header />
         </Provider>
         </BrowserRouter>
      )
      const loginButton = screen.getByRole("button", { name: "Login" });
      expect(loginButton).toBeInTheDocument;  
      
   })
   
   test("should test item cart is present with some number of cart item",()=>{
      render(
         <BrowserRouter>
         <Provider store={appStore}>
         <Header />
         </Provider>
         </BrowserRouter>
      )
      const cartItem = screen.getByText(/Cart/);
      expect(cartItem).toBeInTheDocument;
   })
   
   test("should test when we click on login button, it should change to logout", ()=>{
      render(
      <BrowserRouter>
         <Provider store={appStore}>
            <Header />
         </Provider>
      </BrowserRouter>)
   
      const loginButton = screen.getByRole("button", {name : "Login"});
      fireEvent.click(loginButton);
   
      const logoutButton = screen.getByRole("button", {name: "Logout"})
      expect(logoutButton).toBeInTheDocument();
   })
})
