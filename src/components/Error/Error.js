import { useRouteError } from "react-router-dom";
function Error(){
    const err = useRouteError()
    //console.log(err)
    return <div style={{color:'red'}}>
    <h1>OOPS! Something went wrong</h1>
    <h2>{`${err.status} ${err.statusText}`}</h2>
    <h2>{` ${err.data} `}</h2>
    <a href="/">Go to Home</a>
    </div>
}

export default Error;