import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const errorPage = useRouteError();
    return(
        <div>
            <h1>Oops!! something went wrong</h1>
            <h3>{errorPage.status}</h3>
            <h4>{errorPage.statusText}</h4>
        </div>
    )
}
export default Error;