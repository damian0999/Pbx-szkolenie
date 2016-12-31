import React from 'react';
import Product from './Product';
import Header from '../Header/Header';

export default class Products extends React.Component{

  componentWillMount(){
    this.props.onfetchProducts();
  }

  render(){
    return(
      <div className='ProductsComponent'>
        <Header selectedFilters={this.props.selected} amountOfProducts={this.props.products.length}/>
        <div className='Products'>
          {this.props.products.map((product, idx) =>
            <Product
              key={idx}
              product={product}
              setFavouriteProduct={this.props.setFavouriteProduct}/>)}
        </div>
      </div>
    );
  }
}
