import React, { useState } from 'react';
import '../App.css'; 

function TodoList() {
  const [todos, setTodos] = useState([]); 
  const [task, setTask] = useState('');   

 
  const handleTaskChange = (event) => {
    setTask(event.target.value); 
  }

 
  const addTodo = (event) => {
    event.preventDefault();
    if (task.trim()) { 
      setTodos([...todos, { text: task, completed: false }]);
      setTask(''); 
    }
  };


  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, indx) =>
      indx === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Yeni görev ekle"
          required
        />
        <button type="submit">Ekle</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className={todo.completed ? 'completed' : ''}
            onClick={() => toggleTodo(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
