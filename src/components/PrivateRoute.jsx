import React from 'react'
import {Route,Redirect} from "react-router-dom"

const PrivateRoute=({children,...routeProps}) =>{
  //get each and every prop in routeProps
    console.log(routeProps)
    const profile= false;
    // const navigate=useNavigate();

    if(!profile){
        return <Redirect to="/signin" />
    }
return(
    <>
      <Route {...routeProps}>
      {/* as name of the prop and name of attribute is same it works  */}
        {children}
      </Route>
    </>)
}
export default PrivateRoute