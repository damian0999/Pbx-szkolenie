const allProducts = [
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
];

function products(state = {products: []}, action){
  switch(action.type){
    case 'FETCH_PRODUCTS':
      return Object.assign({}, state, {
        products: allProducts
      });
    default:
      return state;
  }
}

export default products;
