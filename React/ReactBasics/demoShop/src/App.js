
import { useState } from 'react';

import React from 'react';
import NewProduct from './components/NewProduct';

import Products from './components/Products';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    { 
      id: 'p2', 
      title: 'Sirf Excel', 
      amount: 200, 
      date: new Date(2021, 2, 2) },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];

  const [newTitle, setTitle] = useState('');
  const [newDate, setDate] = useState('');
 

  let setFormTitle = "";

  function printProductData(data) {
    console.log("i am inside app.js");
    // console.log(data);
    setTitle(data.title);
    setDate(data.date);
    console.log(setFormTitle);
    
    
  }


  return (
    <div>
      <NewProduct pranay={printProductData} />
      <Products items={products} formTitle={newTitle} formDate={newDate } />
    </div>
  );
}

export default App;