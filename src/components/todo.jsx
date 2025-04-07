import React, { useState } from 'react'

function Todo() {
    const [tasks , setTasks] = useState([])
    const [task , setTask] = useState('')
    function handlechange(e){
        setTask(e.target.value)
    }
    const handlesubmit = (e) =>{
        e.preventDefault()
        setTasks([...tasks , task])
        setTask('')
    }
    const handledelete = (index) =>{
      const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
      
    }
  return (
    <div>
      <h1>ToDO Task</h1>
      <form onSubmit={handlesubmit}> 
        <label className='label'>Task</label>
        <div className='container'>
        <input className='input' type="text" value={task}  onChange={handlechange} placeholder='Enter Task'/>
        <button className='button' type='submit'>Add Task</button>
        </div>
       
      </form>
    <ul>
        {tasks.map((task , index)=>{
            return(
                <li key={index}>{task}
                <button className='dlt' onClick={()=>handledelete(index)}>Delete</button>
                </li>

            )
        })}
    </ul>

    </div>
  )
}

export default Todo
