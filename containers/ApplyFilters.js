import _ from 'underscore';

export const applyFilters = (products, filters) => {
  var activeProducts = [];

  if(filters.length == 0){
    return products;
  } else {
    if(_.contains(filters, '90x50mm')){
      activeProducts.push.apply(activeProducts, _.filter(products, product => product.size == '90x50mm'))
    };
    if(_.contains(filters, '85x55mm')){
      activeProducts.push.apply(activeProducts, _.filter(products, product => product.size == '85x55mm'))
    };
    if(_.contains(filters, 'Only favorites')){
      activeProducts.push.apply(activeProducts, _.filter(products, product => product.isFavourite == true))
    };
    if(_.contains(filters, 'Automotive')){
      activeProducts.push.apply(activeProducts, _.filter(products, product => product.industry == 'Automotive'))
    };
    if(_.contains(filters, 'Fashion')){
      activeProducts.push.apply(activeProducts, _.filter(products, product => product.industry == 'Fashion'))
    };
    if(_.contains(filters, 'Law')){
      activeProducts.push.apply(activeProducts, _.filter(products, product => product.industry == 'Law'))
    };
    if(_.contains(filters, 'IT')){
      activeProducts.push.apply(activeProducts, _.filter(products, product => product.industry == 'IT'))
    };
    if(_.contains(filters, 'Sport')){
      activeProducts.push.apply(activeProducts, _.filter(products, product => product.industry == 'Sport'))
    };
    if(_.contains(filters, 'Art')){
      activeProducts.push.apply(activeProducts, _.filter(products, product => product.industry == 'Art'))
    };
    if(_.contains(filters, 'horizontal')){
      activeProducts.push.apply(activeProducts, _.filter(products, product => product.orientation == 'horizontal'))
    };
    if(_.contains(filters, 'vertical')){
      activeProducts.push.apply(activeProducts, _.filter(products, product => product.orientation == 'vertical'))
    };
    if(_.contains(filters, 'Rating 4')){
      activeProducts.push.apply(activeProducts, _.filter(products, product => product.rating == 4))
    };
    if(_.contains(filters, 'Rating 3')){
      activeProducts.push.apply(activeProducts, _.filter(products, product => product.rating == 3))
    };
    if(_.contains(filters, 'Rating 2')){
      activeProducts.push.apply(activeProducts, _.filter(products, product => product.rating == 2))
    };
    if(_.contains(filters, 'Rating 1')){
      activeProducts.push.apply(activeProducts, _.filter(products, product => product.rating == 1))
    };
    return _.uniq(activeProducts);
  }
}
