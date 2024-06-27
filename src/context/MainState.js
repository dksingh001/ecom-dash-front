import React, {useState} from "react"
import MainContext from "./MainContext"
import {post, get, put, deletereq} from "../Api/api"

const baseUrl = "http://localhost:5500";

const MainState = (props) => {
   
    const {flag, setflag} = useState(false)

    const login = async ({email, password}) =>{
     const data = await post(`${baseUrl}/auth/login`, {email, password}, false);

     console.log("data", data)
     return data;
    }

    return (
       <MainContext.Provider value={{login, flag, setflag }}>
        { props.children }
       </MainContext.Provider>
    );
}

export default MainState;