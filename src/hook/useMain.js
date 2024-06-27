import { useContext } from "react";
import MainContext from "../context/MainContent"

export const useMain = () =>{
   return useContext(MainContext);
}