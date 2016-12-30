import _ from 'underscore';

export const applyFilters = (products, filters) => {
  var activeFilters = [];

  if(filters.length == 0){
    return products;
  } else {
    if(_.contains(filters, '90x50mm')){
      activeFilters.push.apply(activeFilters, _.filter(products, product => product.size == '90x50mm'))
    };
    if(_.contains(filters, '85x55mm')){
      activeFilters.push.apply(activeFilters, _.filter(products, product => product.size == '85x55mm'))
    };
    if(_.contains(filters, 'Only favorites')){
      activeFilters.push.apply(activeFilters, _.filter(products, product => product.isFavourite == true))
    };
    if(_.contains(filters, 'Automotive')){
      activeFilters.push.apply(activeFilters, _.filter(products, product => product.industry == 'Automotive'))
    };
    if(_.contains(filters, 'Fashion')){
      activeFilters.push.apply(activeFilters, _.filter(products, product => product.industry == 'Fashion'))
    };
    if(_.contains(filters, 'Law')){
      activeFilters.push.apply(activeFilters, _.filter(products, product => product.industry == 'Law'))
    };
    if(_.contains(filters, 'IT')){
      activeFilters.push.apply(activeFilters, _.filter(products, product => product.industry == 'IT'))
    };
    if(_.contains(filters, 'Sport')){
      activeFilters.push.apply(activeFilters, _.filter(products, product => product.industry == 'Sport'))
    };
    if(_.contains(filters, 'Art')){
      activeFilters.push.apply(activeFilters, _.filter(products, product => product.industry == 'Art'))
    };
    if(_.contains(filters, 'horizontal')){
      activeFilters.push.apply(activeFilters, _.filter(products, product => product.orientation == 'horizontal'))
    };
    if(_.contains(filters, 'vertical')){
      activeFilters.push.apply(activeFilters, _.filter(products, product => product.orientation == 'vertical'))
    };
    if(_.contains(filters, 'Rating 4')){
      activeFilters.push.apply(activeFilters, _.filter(products, product => product.rating == 4))
    };
    if(_.contains(filters, 'Rating 3')){
      activeFilters.push.apply(activeFilters, _.filter(products, product => product.rating == 3))
    };
    if(_.contains(filters, 'Rating 2')){
      activeFilters.push.apply(activeFilters, _.filter(products, product => product.rating == 2))
    };
    if(_.contains(filters, 'Rating 1')){
      activeFilters.push.apply(activeFilters, _.filter(products, product => product.rating == 1))
    };
    return _.uniq(activeFilters);
  }
}
