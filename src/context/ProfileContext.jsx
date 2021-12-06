import React, { createContext, useContext, useEffect ,useState} from 'react'
import { auth, database } from '../misc/firebase';


const ProfileContext=createContext();
// to use useContext we need to wrap the profile provider component around its childerns so they can acess its value 

export const ProfileProvider=({children}) =>{

    const [profile,setProfile]=useState(null);
    const [isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
      const authUnsub=  auth.onAuthStateChanged(authObj=>{
          //tis return an subcribtion which we need to unscbscribe
            console.log(authObj)
            if(authObj){

                const ref=database.ref(`/profiles/${authObj.uid}`);
                //ref lso returns an subscribtion
                ref.on('value',(snap)=>{
                    //when ever the value of authObj changes snap will be cosolelogged 
                    // console.log('sanp',snap);

                    const {name,createdAt}=snap.val();

                    
                    const data={
                        name,
                        createdAt,
                        uid:authObj.uid,
                        email:authObj.email
                    }
                    setProfile(data);
                    setIsLoading(false)
                    console.log("data")
                })
            }
            else{
                setProfile(null)
                setIsLoading(false)

                if(ref){
                    ref.off();
                }
                //if ref exists then 
                console.log("nodta ")
            }
        })
        return()=>{
            authUnsub();
            //here we unsubscribe authUnsub
            if(ref){
                //ie if ref is obtained then now unsubscribe 
            }
        }
    },[]);
return(
    <>
      <ProfileContext.Provider value={profile,isLoading}>
          {children}
      </ProfileContext.Provider>
    </>)
}
export const useProfile=()=>useContext(ProfileContext);

