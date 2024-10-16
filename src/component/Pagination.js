import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, fetchdata, increament } from '../redux/slices/apislice';


const Pagination = ({}) => {
  
  const page=useSelector((state)=>state.api.pagenumber);
  const dispatch=useDispatch();
  const data1=useSelector((state)=>state.api.data)
  const [totalpages,settotalpages]=useState();

  useEffect(()=>{
    if(data1){
      settotalpages(data1.totalPages);
    }
    else{
      settotalpages(1);
    }
  },[data1]);

  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
      <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
      <div className='flex gap-x-2'> 
        
        { page > 1 &&
            (<button 
            className='rounded-md border-2 px-4 py-1'
            onClick={() => dispatch(decreament())}>
                Previous
            </button>)
        }

        { page < totalpages && 
                (<button 
                className='rounded-md border-2 px-4 py-1'
                onClick={() =>dispatch(increament()) }>
                Next
            </button>)
        }

      </div>
       

        <p className='font-bold text-sm'>
            Page {page} of {totalpages}
        </p>
      </div>
    </div>
  )
}

export default Pagination