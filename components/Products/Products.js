import React from 'react';
import Product from './Product';
import Header from '../Header/Header';

export default class Products extends React.Component{

  componentWillMount(){
    this.props.onfetchProducts();
  }

  render(){
    return(
      <div>
        <Header selectedFilters={this.props.selected} amountOfProducts={this.props.products.products.length}/>
        <div className='Products'>
          {this.props.products.products.map((product, idx) => <Product key={idx} product={product}/>)}
        </div>
      </div>
    );
  }
}
