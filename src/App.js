import React from 'react';
import Navbar from './components/Navbar'
import Card from './components/Card'
import './App.css';
import data from './components/data';



console.log(data)
export default function App() {
  const cards = data.map( item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    }) 
  
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}
