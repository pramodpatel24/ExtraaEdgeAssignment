import React from 'react';
import Login from './Component/Login';
import './App.css';
import { selectUser } from './features/slice';
import { useSelector } from 'react-redux';
import Logout from './Component/Logout';


function App() {
  const user = useSelector(selectUser);


  return (
    <div>
      {user
        ?
        <Logout />
        : <Login />}
    </div>
  );
}

export default App;
