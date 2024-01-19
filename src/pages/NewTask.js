import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NewTask = ( { onAddTask }) => {
     
    
    const history = useNavigate();  
        

        const [formData, setFormData] = useState({
          title: '',
          description: '',
        });
      
        const handleInputChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        };
      

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form data submitted:', formData);
            onAddTask(formData);
            history('/');
        };

        
    return ( 
        <>
        <form action="" onSubmit={handleSubmit}>
            <div className="new-task">
                <div>
                    <label>Title:</label><br/>
                        <input 
                    type="text" 
                    name="title"
                    onChange={handleInputChange} 
                    value={formData.title}
                    required 
                    placeholder="title of task" />
                </div>
                <div>
                    <label>Description:</label><br/>
                    <textarea 
                    required 
                    name="description" 
                    value={formData.description}
                    onChange={handleInputChange}
                    ></textarea>  
                </div>
                <div className="btn">
                    <button type="submit">Add Task</button>
                </div>                
            </div>
        </form>
        </>
     );
}
 
export default NewTask;


