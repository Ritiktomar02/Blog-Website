import React from 'react'
import Header from '../component/Header'
import Pagination from '../component/Pagination'
import Blogs from '../component/Blogs'
const Home = () => {
  return (
    <div>
        <Header/>
        <div className='mt-[100px]'>
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Home