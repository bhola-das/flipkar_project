import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import axios from "../utils/axios";
import Loading from './Loading';

const Details = () => {
  const [product,setproduct]=useState(null)
  const {id}=useParams();

  const getsingleproduct =  async()=>{
    try{
     const {data}=await axios.get(`/products/${id}`);
     setproduct(data)
    }
    catch(e)
    {
      console.error(e);
    }    
  }
  useEffect(()=>{
    getsingleproduct();
  },[]);
  return product? (
    <div className='w-full h-full flex  justify-center items-center gap-10 ml-20'>
     
       <img className='w-[20%] h-[50%]' src={`${product.image}`} alt="" />
     
        <div>
            <h1 className='text-2xl font-bold mb-4'>{product.title}</h1>
            <h2 className='mb-2 text-red-300'>$ {product.price}</h2>
            <h3 className='mt-2 text-blue-300'> {product.category}</h3>
            <h3 className='text-black-400 mt-2'>{product.description} (up to 15 inches)",</h3>
            <div className='flex gap-5 mt-8'>
                <button className='px-2 py-2 bg-blue-400 rounded-md text-white'>Edit</button>
                <button className='px-2 py-2 bg-red-500 rounded-md text-white'>Delete</button>
            </div>
            
        
        </div>

    </div>
  ):(
    <Loading/>
  )
}

export default Details