import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    axios.get('http://13.39.25.153:3001/items')
      .then(response => {
        setItems(response.data);
      });
  }, []);

  const addItem = () => {
    axios.post('http://13.39.25.153:3001/items', { name: itemName })
      .then(response => {
        setItems([...items, response.data]);
        setItemName('');
      });
      console.log(itemName)
  };

  return (
    <div>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
