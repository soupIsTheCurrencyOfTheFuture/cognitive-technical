import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
  const [data, setData] = useState([])

  const fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data)
      setData(response.data)
    }) 
  }

  // const mappedData = (items) => {
  //   <tr>
  //   </tr>
  // }

  return (
    <div className="App">
      <button onClick={fetchData} >
        Fetch Data
      </button>  
      <table class="table">
        <tr>
          <th>Date</th>
          <th>Day</th>
          <th>Price (CAD)</th>
          <th>24hr Change</th>
          <th>Change %</th>
        </tr>
      </table>      
    </div>
  );
}
