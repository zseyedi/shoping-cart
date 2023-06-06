/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { getProducts } from "../assets/services/api";
import { useState } from "react";
import { createContext } from "react";

export const productsContext= createContext();

function ProductContextsProvider({children}) {
    

    const [product,setProduct]=useState([]);
    useEffect(()=>{
        const fetchApi=async()=>{
            setProduct(await getProducts());   
        }
        fetchApi()
    },[]);

   

  return (
    <productsContext.Provider value={product}>
        {children}
    </productsContext.Provider>
  )
}

export default ProductContextsProvider