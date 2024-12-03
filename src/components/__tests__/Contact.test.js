import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import '@testing-library/jest-dom';


test("It should load contact us component ", ()=>{
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test ("To test button is present on the page or not", ()=>{
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
});

test("to find the input box on screen ", ()=>{
    render(<Contact />);
    const inputValue = screen.getByPlaceholderText("name");
    expect(inputValue).toBeInTheDocument();
})


test("to find no. of  input box on screen ", ()=>{
    render(<Contact />);
    const inputValue = screen.getAllByRole("textbox");
    expect(inputValue.length).toBe(2);
})