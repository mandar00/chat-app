import React from 'react'
import {Route,Redirect} from "react-router-dom"
import { useProfile } from '../context/ProfileContext';

const PublicRouter=({children,...routeProps}) =>{
  //get each and every prop in routeProps
    // console.log(routeProps)
    const profile= useProfile();
    console.log(profile)
    // const navigate=useNavigate();
    if(isLoading && !profile){
      return <Container>
        <Loader center vertical size="md" content="Loading" speed="slow"></Loader>
      </Container>
    }
  
      if(!profile && !isLoading){
          return <Redirect to="/" />
      }
return(
    <>
      <Route {...routeProps}>
      {/* as name of the prop and name of attribute is same it works  */}
        {children}
      </Route>
    </>)
}
export default PublicRouter