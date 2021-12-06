import firebase from "firebase/app"
import  'firebase/auth';
import 'firebase/database'

const config={
    apiKey: "AIzaSyBHIDcSCwBb387cyFrckw-zf3DubP-4LuE",
    authDomain: "chat-web-app-65843.firebaseapp.com",
    databaseURL:"https://chat-web-app-65843-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "chat-web-app-65843",
    storageBucket: "chat-web-app-65843.appspot.com",
    messagingSenderId: "379625912056",
    appId: "1:379625912056:web:b1e6ba14a8520eefbf6d0d"
  };

  const app= firebase.initializeApp(config);
  export const  auth = app.auth();  
  //auth is used to authenticate the user 
  console.log(auth)

  export const database = app.database();

// these are the rules specified in database rules 
  /*{
  "rules": {
    "profiles":{
      "$user_id":{
        $ means user_id is a dynamic value
        ".read":"$user_id===auth.uid",
        "$user_id===auth.uid", means if user_id === owner id 
          ".write":"$user_id===auth.uid"
      }
    },
    ".read": false,
    ".write": false
  }
} */
  