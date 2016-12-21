const allProducts = [
  {name: 'Automobil', size: '90x50mm', imgSrc: '../../public/images/Automobil.png', isFavourite: true, rating: 5},
  {name: 'Fifth', size: '90x50mm', imgSrc: '../../public/images/Fifth.png', isFavourite: false, rating: 3},
  {name: 'Severamagenition', size: '90x50mm', imgSrc: '../../public/images/Severamagenition.png', isFavourite: false, rating: 4},
  {name: 'Killum', size: '90x50mm', imgSrc: '../../public/images/Killum.png', isFavourite: true, rating: 2},

  {name: 'Severamagenition', size: '90x50mm', imgSrc: '../../public/images/Severamagenition.png', isFavourite: false, rating: 1},
  {name: 'Killum', size: '90x50mm', imgSrc: '../../public/images/Killum.png', isFavourite: true, rating: 2},
  {name: 'Fifth', size: '90x50mm', imgSrc: '../../public/images/Fifth.png', isFavourite: false, rating: 3},
  {name: 'Automobil', size: '90x50mm', imgSrc: '../../public/images/Automobil.png', isFavourite: true, rating: 4},

  {name: 'Fifth', size: '90x50mm', imgSrc: '../../public/images/Fifth.png', isFavourite: false, rating: 3},
  {name: 'Severamagenition', size: '90x50mm', imgSrc: '../../public/images/Severamagenition.png', isFavourite: false, rating: 4},
  {name: 'Automobil', size: '90x50mm', imgSrc: '../../public/images/Automobil.png', isFavourite: true, rating: 1},
  {name: 'Killum', size: '90x50mm', imgSrc: '../../public/images/Killum.png', isFavourite: true, rating: 2},
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
