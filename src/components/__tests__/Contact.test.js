import { render } from "@testing-library/react"
import Contact from "../Contact";
import '@testing-library/jest-dom';


test("It should load contact us component ", ()=>{
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})