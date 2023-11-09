
import React, { useState } from "react";
import './../styles/App.css';


const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [search,setSearch]=useState('');
  const [item,setItem]=useState(fruits);

   function handleChange(e){
    setSearch(e.target.value)
    let arr=fruits.filter((fruit)=>{
      return fruit.includes(e.target.value)
    })
    
    setItem(arr);
  }

  return (
    <div className="App">
      <h1>Search</h1>
      <input type='text' value={search} onChange={handleChange}/>
      <ul>
      {
        item.map((element)=>
          <li>{element}</li>
        )
      }
      </ul>
    </div>
  );
}

export default App;
