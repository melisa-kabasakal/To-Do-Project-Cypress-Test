
import React, { useState } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Success from './components/Success';
import TodoList from './components/TodoList';
import './App.css'; 

function App() {
  const [users, setUsers] = useState(false);

  const loginHandler = () => {
    setUsers(true); 
  };

  return (
      <div>
        <nav>
          <ul>
            {users && <li><Link to="/todo">To-Do List</Link></li>}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Login loginHandler={loginHandler} />} />
          <Route path="/success" element={users ? <Success /> : <Navigate to="/" />} />
          <Route path="/todo" element={users ? <TodoList /> : <Navigate to="/" />} />
        </Routes>
      </div>
  );
}

export default App;

