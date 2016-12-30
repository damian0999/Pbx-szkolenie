const allProducts = [
  {name: 'Automobil', size: '85x55mm', imgSrc: '../../public/images/Automobil.png', isFavourite: true, rating: 5, industry: 'Automotive', orientation: 'horizontal'},
  {name: 'Fifth', size: '85x55mm', imgSrc: '../../public/images/Fifth.png', isFavourite: false, rating: 3, industry: 'Fashion', orientation: 'horizontal'},
  {name: 'Severamagenition', size: '85x55mm', imgSrc: '../../public/images/Severamagenition.png', isFavourite: false, rating: 4, industry: 'Law', orientation: 'horizontal'},
  {name: 'Killum', size: '85x55mm', imgSrc: '../../public/images/Killum.png', isFavourite: true, rating: 2, industry: 'IT', orientation: 'horizontal'},

  {name: 'Severamagenition', size: '85x55mm', imgSrc: '../../public/images/Severamagenition.png', isFavourite: false, rating: 1, industry: 'Fashion', orientation: 'horizontal'},
  {name: 'Killum', size: '85x55mm', imgSrc: '../../public/images/Killum.png', isFavourite: true, rating: 2, industry: 'Law', orientation: 'horizontal'},
  {name: 'Fifth', size: '85x55mm', imgSrc: '../../public/images/Fifth.png', isFavourite: false, rating: 3, industry: 'IT', orientation: 'vertical'},
  {name: 'Automobil', size: '90x50mm', imgSrc: '../../public/images/Automobil.png', isFavourite: true, rating: 4, industry: 'Sport', orientation: 'vertical'},

  {name: 'Fifth', size: '90x50mm', imgSrc: '../../public/images/Fifth.png', isFavourite: false, rating: 3, industry: 'Art', orientation: 'vertical'},
  {name: 'Severamagenition', size: '90x50mm', imgSrc: '../../public/images/Severamagenition.png', isFavourite: false, rating: 4, industry: 'Art', orientation: 'vertical'},
  {name: 'Automobil', size: '90x50mm', imgSrc: '../../public/images/Automobil.png', isFavourite: true, rating: 1, industry: 'Automotive', orientation: 'vertical'},
  {name: 'Killum', size: '90x50mm', imgSrc: '../../public/images/Killum.png', isFavourite: true, rating: 2, industry: 'Sport', orientation: 'vertical'},
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
