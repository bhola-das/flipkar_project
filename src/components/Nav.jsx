import React,{useState   } from 'react'
import { useContext } from 'react';
import { productcontext } from '../utils/Context';
import { Link  } from 'react-router-dom';

const Nav = () => {
  const [products]=useContext(productcontext);
  let distinct_category=products && products.reduce((acc,cv)=>[...acc,cv.category],[] )
  distinct_category=[...new Set(distinct_category)]
  console.log(distinct_category)

  return (
    <nav className='w-[15%] h-full flex flex-col  bg-slate-400 pt-5 items-center gap-5 '>
     <a className='px-2 py-1 bg-blue-500 rounded-md text-white' href="">Add new product</a>
      <h1 className='text-2xl w-[70%] font-bold'>Catogary</h1>
      <div className=' w-[70%]'>
        {
          distinct_category.map((c,i)=>(
            <Link to={`/?category=${c}`} className='flex items-center mb-3 font-bold hover:text-red-500 '>
          <span className='rounded-full mr-2  bg-rose-300 w-[15px] h-[15px]'></span>
            {c} </Link>
        
          ))
        }
      </div>

    </nav>
  )
}

export default Nav