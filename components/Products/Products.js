import React from 'react';
import Product from './Product';
import Header from '../Header/Header'

export default class Products extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.onfetchProducts();
  }

  showProducts(product, idx){
    return(
      <Product key={idx} product={product}/>
    );
  }

  render(){
    return(
      <div>
        <Header />
        <div className='Products'>
          {this.props.products.products.map((product, idx) => this.showProducts(product, idx))}
        </div>
      </div>
    );
  }
}
