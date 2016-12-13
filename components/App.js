import React from 'react';

import Filters from './Filters/Filters';
import Products from './Products/Products';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='App'>
        <div className='Filters flex-filters-container'>
          <Filters />
        </div>
        <div className='Products flex-products-container'>
          <Products />
        </div>
      </div>
    );
  }
}
