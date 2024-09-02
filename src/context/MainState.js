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
      const data = await get(`${baseUrl}/product/getproductbyId/${id}`, true);
      return data;
    };

    const getUserDetails = async () => {
      const data = await get(`${baseUrl}/auth/get`, true);
      return data;
    }

    const getUserdetailsbyId = async(id) =>{
      const data = await get(`${baseUrl}/auth/get/${id}`, true)
      return data;
    }
    
    const addtocart = async(id) => {
      const data = await post (`${baseUrl}/api/cw/addtocart/${id}`)
      return data;
    }

  const deletecartItem = async(id) =>{
    const data = await deletereq(`${baseUrl}/api/cw/removefromcart/${id}`, true)
    return data;
  } 

  const fetchallcartItem = async() =>{
    const data = await get(`${baseUrl}/api/cw/fetchallcartItem`, true)
    return data;
  }

  const addtowishlist = async(id)=>{
    const data = await post(`${baseUrl}/api/cw/addtowishlist/${id}`, true)
    return data;
  }

  const deletewishlistItem = async(id) =>{
    const data = await delete(`${baseUrl}/api/cw/removefromwishlist/${id}`, true)
    return data;
  }

  const fetchallwishlist = async(id) =>{
    const data = await get(`${baseUrl}/api/cw/fetchallwishlistItem`, true)
    return data;
  }
    return (
       <MainContext.Provider value={{login, signup, flag, setflag, getproducts, getProductById, getUserDetails, getUserdetailsbyId, addtocart, deletecartItem, fetchallcartItem, addtowishlist, deletewishlistItem, fetchallwishlist }}>
        { props.children }
       </MainContext.Provider>
    );
}

export default MainState;