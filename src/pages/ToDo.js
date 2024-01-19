
import  { useState } from 'react';

const ToDo = ({ tasks, onTaskComplete }) => {
  const [checkedItems, setCheckedItems] = useState(Array(tasks.length).fill(false));

  const handleToggle = (index, e) => {
    e.stopPropagation(); // Stop the event from propagating to parent elements
  
    setCheckedItems(prevItems => {
      const newCheckedItems = [...prevItems];
      newCheckedItems[index] = !newCheckedItems[index];
      return newCheckedItems;
    });
  
    // Pass the index of the completed task to the parent component
    onTaskComplete(index);
  };
  
  return (
    <>
      <h2>To-Do List:</h2>
      <hr />
      <br />
      <div className='to-do'>
        <ul>
          {tasks.map((task, index) => (
            <li onClick={(e) => handleToggle(index, e)} key={index}>
              <div>
                <p><span className='title'>Title:</span>{task.title}</p>
                <p><span className='description'>Description:</span>{task.description}</p>
              </div>
              <div className='checkbox'>
                <input type='checkbox' checked={checkedItems[index]} readOnly />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDo;
