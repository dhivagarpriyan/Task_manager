import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Tasks3 = () => {
    const[data,setData]=useState({});
    const {id}=useParams();
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(json => {console.log(json)
         setData(json)
       })
       console.log(data)
    },[])
  return (
    <div className='max-w-[600px] mx-auto mt-16'>
         <h1 className='text-center font-bold'>TASKS</h1>
        <div className=' max-w-[500px] mx-auto border-2 border-black p-4 mt-8 rounded-md font-bold'>
           <span>UserID : {data.userId}</span>
            <h1>ID : {data.id}</h1>
            <h1 className='max-w-[400px]'>Tittle : {data.title}</h1>
            <div>
                <label className=''>Completed : </label>
              <input type="checkbox" checked={data.completed} placeholder='Completed' />
            </div>
            
        </div>
        
       
    </div>
  )
}

export default Tasks3