import React from 'react';
import Product from './Product';
import Header from '../Header/Header'

export default class Products extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: [
        {name: 'Automobil', size: '90x50mm', imgSrc: '../../public/images/Automobil.png', starsImg: '../../public/images/stars.png', isFavourite: true, rating: 3},
        {name: 'Fifth', size: '90x50mm', imgSrc: '../../public/images/Fifth.png', starsImg: '../../public/images/stars.png', isFavourite: false, rating: 3},
        {name: 'Severamagenition', size: '90x50mm', imgSrc: '../../public/images/Severamagenition.png', starsImg: '../../public/images/stars.png', isFavourite: false, rating: 4},
        {name: 'Killum', size: '90x50mm', imgSrc: '../../public/images/Killum.png', starsImg: '../../public/images/stars.png', isFavourite: true, rating: 2},

        {name: 'Severamagenition', size: '90x50mm', imgSrc: '../../public/images/Severamagenition.png', starsImg: '../../public/images/stars.png', isFavourite: false, rating: 4},
        {name: 'Killum', size: '90x50mm', imgSrc: '../../public/images/Killum.png', starsImg: '../../public/images/stars.png', isFavourite: true, rating: 2},
        {name: 'Fifth', size: '90x50mm', imgSrc: '../../public/images/Fifth.png', starsImg: '../../public/images/stars.png', isFavourite: false, rating: 3},
        {name: 'Automobil', size: '90x50mm', imgSrc: '../../public/images/Automobil.png', starsImg: '../../public/images/stars.png', isFavourite: true, rating: 3},

        {name: 'Fifth', size: '90x50mm', imgSrc: '../../public/images/Fifth.png', starsImg: '../../public/images/stars.png', isFavourite: false, rating: 3},
        {name: 'Severamagenition', size: '90x50mm', imgSrc: '../../public/images/Severamagenition.png', starsImg: '../../public/images/stars.png', isFavourite: false, rating: 4},
        {name: 'Automobil', size: '90x50mm', imgSrc: '../../public/images/Automobil.png', starsImg: '../../public/images/stars.png', isFavourite: true, rating: 3},
        {name: 'Killum', size: '90x50mm', imgSrc: '../../public/images/Killum.png', starsImg: '../../public/images/stars.png', isFavourite: true, rating: 2},
      ]
    }
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
          {this.state.products.map((el, idx) => this.showProducts(el, idx))}
        </div>
      </div>
    );
  }
}
