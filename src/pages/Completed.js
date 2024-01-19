import React from 'react';

const Completed = ({ completedTasks, onRemoveAllTasks }) => {
  return (
    <>
    <div className='completed-title'>
        <h2>Completed Tasks:</h2>
        <button className='clr-btn' onClick={onRemoveAllTasks}>Remove All Tasks</button>
    </div>
    <hr/>
    <br/>  
    <ul>
        {completedTasks.map((task, index) => (
          <li  className='completed-tasks' key={index}>
            <del><p><span className='title'>Title: </span>{task.title}</p></del>
            <del><p><span className='description'>Description: </span>{task.description}</p></del>
          </li>
        ))}
    </ul>
    </> 
  );
};

export default Completed;

