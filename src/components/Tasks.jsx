import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [taskDescription, setTaskDescription] = useState('');
    const [taskPriority, setTaskPriority] = useState('select an priority');
    const [taskProgress, setTaskProgress] = useState('select an progress');
    const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const addTask=()=>{
        if(taskDescription == ""){
            alert('Please enter a task description');
            return;
        }
       

        const newTask = {
            description: taskDescription,
            priority: taskPriority,
            progress: taskProgress,
        };
        setTasks([...tasks,newTask]);
        resetForm();
    }

    const deleteTask=(index)=>{
        const updatedTask=tasks.filter((task,taskIndex)=>taskIndex !== index);
        setTasks(updatedTask);
    }

    const editTask=(index)=>{
        const task = tasks[index];
        setCurrentTaskIndex(index);
        setIsEditing(true);
        setTaskDescription(task.description);
        setTaskPriority(task.priority);
        setTaskProgress(task.progress);
    }

    const updateTask=()=>{

        if (taskDescription === '') {
            alert('Please enter a task description');
            return;
          }

        const updatedTask=tasks.map((task,taskIndex)=>taskIndex === currentTaskIndex?
         {description:taskDescription,priority:taskPriority,progress:taskProgress}:task
        );
        setTasks(updatedTask);
        resetForm();
    }

    const resetForm = () => {
        setTaskDescription('');
        setTaskPriority('select an priority');
        setTaskProgress('select an progress');
        setIsEditing(false);
        setCurrentTaskIndex(null);
      };

    //   https://jsonplaceholder.typicode.com/todos
    // "completed": false
  return (
    <div className='max-w-[850px] mx-auto mt-[50px]'>
        <Link to={"/Task"} className=' text-3xl flex justify-center font-bold'>TASK MANAGER</Link>
        <div className='text-center mt-8'>
            <input type='text' placeholder='Description...'
              className='border-2 border-black px-2 py-1 mx-2 rounded-md'
              value={taskDescription}
              onChange={(e)=>setTaskDescription(e.target.value)}
            />
            <select value={taskPriority} onChange={(e)=>setTaskPriority(e.target.value)}
              className='border-2 border-black px-2 py-1 mr-2 rounded-md'
            >
                <option value="">Select an priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <select value={taskProgress} onChange={(e)=>setTaskProgress(e.target.value)}
              className='border-2 border-black px-2 py-1 mr-2 rounded-md'
            >
                <option value="">Select an progress</option>
                <option value="To-do">To-do</option>
                <option value="In-progress">In-progress</option>
                <option value="Done">Done</option>
            </select>
            <button onClick={addTask} disabled={isEditing === true} className='bg-green-500 px-2 py-1 rounded-md text-white font-bold mx-4'>
                ADD TASK
            </button>
            {isEditing && (
                 <button onClick={updateTask} className='bg-orange-500 px-2 py-1 rounded-md text-white font-bold '>
                 Update TASK
             </button>
            )}

        </div>
        <div className=" text-center flex flex-col gap-y-4 mt-8">
          {tasks.map((task, index) => (
            <div key={index} className=" max-w-[400px] mx-auto flex gap-x-4 justify-center items-center  bg-white p-4 border-2 border-black shadow-md rounded-md">
                
              <span className='font-bold text-md'>Task {task.description}</span>
              <span className='font-bold text-md'>Priority {task.priority}</span>
              <span className='font-bold text-md'>Progress {task.progress}</span>
              
              <button onClick={() => editTask(index)}
               className='bg-yellow-500 px-2 py-1 rounded-md text-white font-bold'
              >Edit</button>
              <button  onClick={() => deleteTask(index)}
                className='bg-red-500 px-2 py-1 rounded-md text-white font-bold '
              >Delete</button>
            </div>
          ))}
        </div>

    </div>
  )
}

export default Tasks