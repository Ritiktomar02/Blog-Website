import React from 'react'
import Header from '../component/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../component/Pagination';
import Blogs from '../component/Blogs';

const Category = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div>
        <Header/>
        <div class="mt-[100px] mb-6 max-w-2xl mx-auto flex items-center space-x-2">
            <button className='border-2 border-gray-300 py-1 px-4 rounded-md'
            onClick={() => navigation(-1)}
            >
                back
            </button>
            <h2  className='text-xl font-bold'>
                Blogs Tagged <span className='underline text-blue-700'>#{category}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
      
    </div>
  )
}

export default Category;
