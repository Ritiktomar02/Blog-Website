import React, { useEffect, useState } from 'react'
import { Routes,Route, useSearchParams, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Blogid from './pages/Blogid'
import Category from './pages/Category'
import Tag from './pages/Tag'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from './redux/slices/apislice'
const App = () => {

  const dispatch=useDispatch();
  const location=useLocation();
  const pagenumber=useSelector((state)=>state.api.pagenumber)

  useEffect(() => {
  
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split('/').at(-1).replaceAll("-", " ");
      dispatch(fetchdata({ pagenumber, tag }));
    } 
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      dispatch(fetchdata({ pagenumber, category }));
    } 
    else {
      dispatch(fetchdata({ pagenumber }));
    }
}, [location.pathname, pagenumber]);

  return (
    
  
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:blogid' element={<Blogid/>}/>
        <Route path='/categories/:category' element={<Category/>}/>
        <Route path='/tags/:tag' element={<Tag/>}/>
      </Routes>

  )
}

export default App