import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
  const [data, setData] = useState([])
  const [coinName, setCoinName] = useState('')
  const [message, setMessage] = useState('')

  const fetchData = () => {
    axios.post('/api/data', {
      query: coinName
    }) 
    .then((response) => {
      setMessage('')
      const dataToSet = mappedData(response.data)
      dataToSet.pop()
      setData(dataToSet)
    })
    .catch(() => {
      setMessage("Please enter a valid coin")
      setData([])
    }) 
  }

  const mappedData = (items) => {
    return items.map((item) => {
      return (
        <tr>
          <th>{item[1]}</th>
          <th>{item[2]}</th>
          <th>{item[0]}</th>
          <th style={item[3] > 0 ? {color: 'green'} : {color: 'red'}}>{item[3]}</th>
          <th style={item[4] > 0 ? {color: 'green'} : {color: 'red'}}>{item[4]}</th>
        </tr>
      )
    })
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={(event) => event.preventDefault()}>
        <input
          placeholder="search for a coin"
          product="product"
          type="text"
          value={coinName}
          onChange={(event) => setCoinName(event.target.value)}
        />
        <button className="search-button" type="submit" onClick={fetchData}>Search</button>
      </form>
      <p style={{color: 'red'}}>{message}</p>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Day</th>
            <th>Price (CAD)</th>
            <th>24hr Change</th>
            <th>Change %</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>      
    </div>
  );
}
