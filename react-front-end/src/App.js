import React, {useState} from 'react';
import './App.css';

import Phonebook from './components/phonebook';
import Register from './components/register';
import Search from './components/search';
import Visual from './components/visual';

export default function App() {
  const [users, setUsers] = useState([])
  const [searchResult, setSearchResult] = useState('')

  return (
    <div className="App">
      <div className='phonebook-container'>
        <Register setUsers={setUsers} />
        <Phonebook setUsers={setUsers} users={users} searchResult={searchResult}/>
        <Search users={users} setUsers={setUsers} searchResult={searchResult} setSearchResult={setSearchResult} />
      </div>
      <div className='visualization-container'>
        <Visual users={users}/>
      </div>
    </div>
  );
}
