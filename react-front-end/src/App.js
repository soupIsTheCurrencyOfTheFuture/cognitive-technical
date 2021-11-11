import React, {useState} from 'react';
import './App.css';

import Phonebook from './components/phonebook';
import Register from './components/register';
import Search from './components/search'

export default function App() {
  let [users, setUsers] = useState([])

  return (
    <div className="App">
      <Register setUsers={setUsers} />
      <Phonebook setUsers={setUsers} users={users}/>
      <Search users={users} setUsers={setUsers} />
    </div>
  );
}
