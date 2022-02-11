import React from 'react';
import Login from './pages/Login';
import Todo from './pages/Todo';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </div>
  );
};

export default App;
