import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from '../redux/slices/apislice';
import { useEffect } from "react";
import Spinner from './Spinner';
import BlogDetails from './BlogDetails'

const Blogs = () => {
    const data1=useSelector((state)=>state.api.data)
    const isLoading=useSelector((state)=>state.api.isLoading);
    const [data,setdata]=useState([]);
     
  useEffect(()=>{
    if(data1){
      setdata(data1.posts);
    }
    else{
        setdata([]);
    }
  },[data1]);


 

  return (
    <div className="flex flex-col gap-y-10 my-4">
      {isLoading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <Spinner/>
          <p className="text-center font-bold text-3xl">Loading</p>
        </div>
      ) : data.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
       <div className='mb-[100px]'>
       {
        data.map((post) => (
        
          <div className='flex flex-col gap-y-10 my-4'>
          <BlogDetails key={post.id} post={post}/>
          </div>
          
        ))
       }
        </div>
      )}
    </div>
  );
}

export default Blogs;