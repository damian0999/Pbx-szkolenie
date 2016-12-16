export const fetchProducts = () => ({
  type: 'FETCH_PRODUCTS'
});

export const fetchFilters = () => ({
  type: 'FETCH_FILTERS'
});

export const choosenFilters = (label, index) => ({
  type: 'CHOOSEN_FILTER',
  label,
  index
})

export const deleteChoosenFilter = (label, index) => ({
  type: 'DELETE_CHOOSEN_FILTER',
  label,
  index
});
