const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const FETCH_FILTERS = 'FETCH_FILTERS';
const CHOOSEN_FILTER = 'CHOOSEN_FILTER';
const DELETE_CHOOSEN_FILTER = 'DELETE_CHOOSEN_FILTER';
const SET_FAVOURITE = 'SET_FAVOURITE';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS
});

export const fetchFilters = () => ({
  type: FETCH_FILTERS
});

export const choosenFilters = (label) => ({
  type: CHOOSEN_FILTER,
  label
})

export const deleteChoosenFilter = (label) => ({
  type: DELETE_CHOOSEN_FILTER,
  label
});

export const setFavourite = (product) => ({
  type: SET_FAVOURITE,
  product
})
