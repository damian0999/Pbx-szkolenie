export const fetchProducts = () => ({
  type: 'FETCH_PRODUCTS'
});

export const fetchFilters = () => ({
  type: 'FETCH_FILTERS'
});

export const choosenFilters = (filter) => ({
  type: 'CHOOSEN_FILTERS',
  filter
})
