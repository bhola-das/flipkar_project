import React, { useEffect, useState } from 'react'  
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { productcontext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/axios'

const Home = () => {
  const [products]=useContext(productcontext)
 
  const {search}=useLocation();
  const category=decodeURIComponent(search.split("=")[1]);

  const [filterdata,setfilterdata]=useState(null)

  const getproductcategory=async ()=>{
    try{
    const {data}=await axios.get(`/products/category/${category}`)
    setfilterdata(data)
    }
  catch(e)
  {
console.log(e)
  }
}

useEffect(()=>{
  if(!filterdata) setfilterdata(products)
  if(category != "undefined")
    {
      getproductcategory();
    }
},[ category,products])
  return products ? (
    <>   
    
    <Nav/>
    <div className='w-[85%] h-full p-10 flex flex-wrap overflow-x-hidden overflow-y-auto'>
    {
     filterdata && filterdata.map((p,i)=>(
        <Link to={`/details/${p.id} `} className='mr-3 mb-3 p-3 border shadow  rounded w-[18%] h-[50%] flex flex-col justify-center items-center '>
      <div className='image mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center hover:scale-110 ' style={{backgroundImage:`url(${p.image})`}} > 
      </div>
      <h1 className='hover:text-blue-500 text-sm'>{p.title}</h1>
    </Link>
      ) ) 
    }
    </div>
    </>)
    :
    (
    <Loading/>
  );
   
  
}

export default Home