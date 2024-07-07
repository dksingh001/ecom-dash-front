import React, {useState} from "react"
import MainContext from "./MainContext"
import {post, get, put, deletereq} from "../Api/api"

const baseUrl = "http://localhost:5500";

const MainState = (props) => {
   
    const {flag, setflag} = useState(false)

    const login = async ({email, password}) =>{
     const data = await post(`${baseUrl}/auth/login`, {email, password}, false);
    //  console.log("data", data)
     return data;
    }

    const signup = async ({name, phone, email, password, conformpassword})=>{
      const data = await post(`${baseUrl}/auth/signup`, {name, phone, email, password, conformpassword}, false)
      return data;
    }

    const getproducts = async () =>{
      const data = await get(`${baseUrl}/product/getproduct`, true)
      return data;
    }
  
    const getProductById = async (id) => {
      const data = await get(`${baseUrl}/product/getproduct/${id}`, true);
      return data;
    };
  

    return (
       <MainContext.Provider value={{login, signup, flag, setflag, getproducts, getProductById }}>
        { props.children }
       </MainContext.Provider>
    );
}

export default MainState;