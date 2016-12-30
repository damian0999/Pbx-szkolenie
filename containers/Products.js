import { connect } from 'react-redux';
import { fetchProducts } from '../redux/action/index';
import { applyFilters } from './ApplyFilters'
import Products from '../components/Products/Products';

const mapStateToProps = (state, ownProps) =>({
  products: applyFilters(state.products.products, state.filters.selectedFilters),
  selected: Object.values(state.filters.selectedFilters)
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    onfetchProducts: () => dispatch(fetchProducts())
  }
}

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

export default ProductsContainer
