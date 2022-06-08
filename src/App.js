import React, { useState } from "react";
import './App.css';

function App() {
  // useState
  const[newItem, setNewItem] = useState("");
  // create an array that will hold the new items
  const[items, setItems] = useState([]);
  // helper functions
  function addItem() {
    if (!newItem) {
      alert("Enter an item please");
      return;
    }
    // create new object
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };
    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }
  // delete items
  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }
  return (
    <div className="App">
      <div className="header">
      {/* 1. Header */}
          <h1>TO-DO List App</h1>
      </div>
      {/* 2. Input and also button */}
      <div className="buttons">
          <input type="text" placeholder="Add an item..." value={newItem} onChange={e => setNewItem(e.target.value)}/>

          <button onClick={() => addItem()}>Add Todo</button>
      </div>
      {/* 3. List of items(ul and li) */}
      <div className="list">
          <ul>
            {items.map(item => {
              return (
                <li key={item.id}>{item.value}<button className="delete-button" onClick={() => deleteItem(item.id)}>---</button></li>
              )
            })}
          </ul>
      </div>
    </div>
  )
}
export default App;
