import React, { useEffect, useState } from 'react';
import './App.css';
import Components from "./Components.js";

function App() {
  const [data, setData] = useState([""]);

  useEffect(() => {
    fetch(
      'data.json', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then((response) => response.json())
      .then((data_raw) => {
        console.log(data_raw);
        setData(data_raw.contents);
        // console.log(data.contents[0].content);
      });
  }, []);
  

  return (

    <div className="App">
        {data.map(block => Components(block))}
    </div>
     

  )
}

export default App;
