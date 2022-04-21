import React from 'react';
import List from '../components/List.js';
import ListType from '../components/ListType.js';
import '../App.css';


function ListProducts() {
  return (
    <div>
      <h5 className='btn'>Qué desea comer?</h5>
      <ListType />
      <h4>Los más elegidos</h4>
      <div className='ListProducts'>
        <List />
      </div>
      <button className='btn'>Comprar</button> 
    </div>
  );
}

export default ListProducts;