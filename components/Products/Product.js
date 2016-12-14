import React from 'react';
import Favourite from './Favourite';

export default class Product extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='Product'>
        <img src={this.props.product.imgSrc} className='product-image'/>
        <div className='product-rating'>
          <img src={this.props.product.starsImg}/>
          <Favourite isFavourite={this.props.product.isFavourite}/>
        </div>
        <div className='product-description'>
          <p className='product-name'>{this.props.product.name}</p>
          <span>{this.props.product.size}</span>
        </div>
      </div>
    );
  }
}