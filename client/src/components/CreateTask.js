import axios from 'axios';
import React, { useState } from 'react';


const CreateTask = () => { 
  
  const [task, setTask] = useState('');

  const handleSubmit = () => {
      axios.post('http://localhost:5000/addTasks', {
          task: task
        })
    setTask('');
  }

   
  return (
      <div className='task-list'>
          <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="your text..."
          />
          <button onClick={handleSubmit}>Submit</button>
   </div>
  )
}

export default CreateTask;