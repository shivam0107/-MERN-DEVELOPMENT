
// react hooks utility function
/*
  Hooks let you use different 
  React features from your components


  State lets a component “remember”
   information like user input.

*/ 
import React, { useState } from 'react'; // useState 

// to to event handeling in react 
// we will use PROPS 
// addEventListener ---> imoartive approach
// props ----> declarative approach


import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const  ProductItem = (props) => {

  //       title ->  is value of the variable (title is initialize with props.title)
  //       setTitle -> function for updating value
  const [title, setTitle] =  useState(props.title);
    const [newDate, setDate] = useState(props.newDate);

  /*
      why const ---> 

      useState is simply a state updating function. Const is used here because the 
      change of value is being managed somewhere else by React. You're telling React 
      to manage some value for you by calling useState. After calling setCount the component
      is rerendered and the new call of useState returns the new value
      
  */
  let newTitle = props.formTitle;

  

  function clickHandler() {
    //title = "Popcorn";
   setTitle(newTitle);

    console.log("button clicked");
    console.log(newTitle);
  }
  

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} newDate = {newDate} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
}

export default ProductItem;