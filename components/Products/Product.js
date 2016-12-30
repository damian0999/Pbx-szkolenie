import React from 'react';
import Rating from '../general/Rating';
import Favourite from './Favourite';

export default class Product extends React.Component{
  render(){
    return(
      <div className='Product'>
        <img src={this.props.product.imgSrc} className='product-image'/>
        <div className='product-rating'>
          <Rating rating={this.props.product.rating}/>
          <Favourite isFavourite={this.props.product.isFavourite} toggleFavourite={() => this.props.setFavouriteProduct(this.props.product)}/>
        </div>
        <div className='product-description'>
          <p className='product-name'>{this.props.product.name}</p>
          <span>{this.props.product.size}</span>
        </div>
      </div>
    );
  }
}
