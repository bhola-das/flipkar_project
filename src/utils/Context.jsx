import React, { createContext, useEffect, useState } from 'react'
import axios from './axios';
export const productcontext=createContext();
const Context = (props) => {
const [product,setproduct ]=useState(null)

const getproduct =async()=>{
  try {
   const {data}=await axios("/products");
   setproduct(data);
  }  
  catch(e){
    console.error(e)
  }
}
useEffect(()=>{
  getproduct();
},[])
  return (
  < productcontext.Provider value={[product,setproduct]}>
    {props.children}
    </ productcontext.Provider>
    )
}

export default Context