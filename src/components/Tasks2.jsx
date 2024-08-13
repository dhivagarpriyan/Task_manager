import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BiShow } from "react-icons/bi";
const Tasks2 = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then((res)=>{
          setData(res.data)
          console.log(data)
         }
        )
        .catch((err)=>{console.log(err)})
    },[])
  return (
    <div>
        <h1 className=' my-8 text-center font-bold text-2xl'>TASKS DATAS</h1>
        {data.map((task,index)=>(
            <div key={task.id} className='max-w-[600px] flex justify-between items-center mx-auto border-2 border-black my-2 rounded-md p-4 font-bold'>
                <div>
                <span>UserID : {task.userId}</span>
                <h1 className=''>ID : {task.id}</h1>
                <h1 className='max-w-[400px]'>Tittle : {task.title}</h1>
                
                  <div>
                    <label className=''>Completed : </label>
                     <input type="checkbox" checked={task.completed} placeholder='Completed' />
                  </div>
                </div>
        
                    <Link to={`/Task/${task.id}`}>
                      <BiShow className='text-green-500' size={25}/>
                    </Link>
                
            </div>
        ))}
       
    </div>
  )
}

export default Tasks2