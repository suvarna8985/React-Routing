import React from 'react'
import { createContext,useState } from 'react'


//global storage create

const UserContext=createContext()

function UserProvider(children){
    const[isLogin,setIsLogin]=useState("true")

    //data sharing
    return(
    <UserContext.Provider 
    value={{
        isLogin,
        setIsLogin
    }}>
        {children}
    </UserContext.Provider>
    )
}
export default UserContext
export {UserProvider}

