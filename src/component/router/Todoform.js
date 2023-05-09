import React, { useState } from 'react'
import './todocss.css'
const Todoform = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  // const [editMode , setEditMode]=useState(0);
  
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setNewTodo(todos[index])
    // setEditMode(1)
    deleteTodo(index)
  };
  return (
    <>
 
  
    <div className="form" >
      
        
        <div>
          <label htmlFor="description">To-Do List</label>
          <textarea id="description" name="description" value={newTodo}
        onChange={handleInputChange} required/>
        </div>
        <div>
        <button onClick={addTodo}   className='btn-sub'>Add</button>
          {/* <button id="edit-save" onClick="editSave()">
            Save Edit
          </button> */}
        </div>
      
    </div>
    <div id="todo-list">
            
            
        {todos.map((todo, index) => (
          <div className='card' key={index}>

            
            <button className="btn delete-button" onClick={() => deleteTodo(index)}>Delete</button>
            <button className="btn edit-button" onClick={() => editTodo(index)}>Edit</button>
            <div className='card-content'>{todo}</div>
          </div>
        ))}
        </div>
  
</>

  )
}

export default Todoform