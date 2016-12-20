import React from 'react';

import Filters from '../containers/Filters';
import Products from '../containers/Products';

export default class App extends React.Component{
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
