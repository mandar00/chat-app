import React from 'react';
import firebase from 'firebase/app'
import {Container,Grid,Row,Panel,Col,Alert} from "rsuite";

import {auth, database} from "../misc/firebase"

const SignIn=() =>{
  
  const signInWithProvider=async(provider)=>{
   try{
     const {additionalUserInfo,user} =await auth.signInWithPopup(provider);

     if(additionalUserInfo.isNewUser){
       //isNewUser is used to check it the user already exists in database of not if does then store his name and time when signed in 
      await database.ref(`/profiles/${user.uid}`).set({
         name:user.displayName,
         createdAt:firebase.database.ServerValue.TIMESTAMP
       })
     }
      alert("signed in",4000)
   }catch(err){
    alert("error",4000)

   }
   //sign in with popup is a promise if we hover over it it shows thus we need to return a promise 
  }


  const facebookSignIn=()=>{
    signInWithProvider(new firebase.auth.FacebookAuthProvider())
  }
  const googleSignIn=()=>{
    signInWithProvider(new firebase.auth.GoogleAuthProvider())

  }
  
return(
    <>
    <Container>
      <Grid className="mt-page">
        <Row>
        <Col xs={24} md={12}>
          <Panel>
          <div className="text-center">
          <h1>Welcome to chat App</h1>
          <p>Progressive Chat Platform </p>
          </div>
          <div className="btnDiv">
            <button className="facebookBtn" onClick={facebookSignIn}>
            <i class="fa fa-facebook"></i> <p>Continue With facebook</p>
            </button>
            <button className="googleBtn" onClick={googleSignIn}>
            <i class="fa fa-google"></i><p>Continue With Google</p>
            </button>
          </div>
          </Panel>
        </Col>
        </Row>
      </Grid>
    </Container>
    </>)
}

export default SignIn