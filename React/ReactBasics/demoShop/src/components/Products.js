import React from 'react';

import ProductItem from './ProductItem';
import Card from './Card';

import './Products.css';

const Products = (props) => {

  console.log(props.formTitle);
  console.log("from product.js");



  return (
    <Card className="products">
      <ProductItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        formTitle={props.formTitle}
        formDate = {props.formDate}
      />
      <ProductItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        formTitle={props.formTitle}
        formDate = {props.formDate}


      />
      <ProductItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        formTitle={props.formTitle}
        formDate = {props.formDate}


      />
      <ProductItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        formTitle={props.formTitle}
        formDate = {props.formDate}


      />
    </Card>
  );
}

export default Products;