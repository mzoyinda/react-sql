import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Card = () => {

    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
       
    const getTaskList = () => {
        axios.get('http://localhost:5000/tasks')
          .then((response) => response.data)
        .then(response => setTaskList(response))
        }
        getTaskList();
   }, [taskList])

    
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/deleteTask/${id}`)
    }


    return (
      
        <div className='card-container'>
            {taskList.map((item)=>(   
         <div className='card' key={item.taskId}>
          <div>
              <p>{item.task}</p>
           </div>
      
            <div className='card-footer'>
                <button > Done</button>
                <button onClick={() => handleDelete(item.taskId)}>Delete</button>
            </div>
            </div>
             ))}
        </div>
  )
}

export default Card