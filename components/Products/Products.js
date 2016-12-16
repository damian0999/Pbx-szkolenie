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

  render(){
    return(
      <div>
        <Header selectedFilters={this.props.selected}/>
        <div className='Products'>
          {this.props.products.products.map((product, idx) => <Product key={idx} product={product}/>)}
        </div>
      </div>
    );
  }
}
