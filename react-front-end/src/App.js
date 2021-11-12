import React, {useState} from 'react';
import './App.css';

import Phonebook from './components/phonebook';
import Register from './components/register';
import Search from './components/search';
import Visual from './components/visual';
import Orbits from './components/visual/orbits';

export default function App() {
  const [users, setUsers] = useState([])
  const [toggle, setToggle] = useState(true)
  const [searchResult, setSearchResult] = useState('')
  const [orbits, setOrbits] = useState([<Orbits />, <Orbits />, <Orbits />])

  return (
    <div className="App">
      <div className='phonebook-container'>
        <button type='button' className="btn btn-outline-light" onClick={() => setToggle(toggle ? false : true)} >{toggle ? 'switch to search' : 'switch to register'}</button>
        {toggle ? <Register setUsers={setUsers} setOrbits={setOrbits}/> : <Search users={users} setUsers={setUsers} searchResult={searchResult} setSearchResult={setSearchResult} />}
        <Phonebook setUsers={setUsers} users={users} searchResult={searchResult}/>
      </div>
      <div className='visualization-container'>
        <Visual users={users} orbits={orbits}/>
      </div>
    </div>
  );
}
