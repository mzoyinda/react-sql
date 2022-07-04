import React from 'react';
import Card from './components/Card';
import CreateTask from './components/CreateTask';
import './style.css';

const App = () => {

  return (
    <div className="App">
      <h1 className='logo'>TaskList</h1>
      <div className='content'>
        <CreateTask />
        <Card/>
     </div>
    </div>
  );
}

export default App;
