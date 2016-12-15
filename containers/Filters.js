import { connect } from 'react-redux';
import { fetchFilters } from '../redux/action/index';
import Filters from '../components/Filters/Filters';

const mapStateToProps = (state, ownProps) =>({
  size: state.filters.sizeFilters,
  favourite: state.filters.favouriteFilters,
  industry: state.filters.industryFilters
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    onFetchFilters: () => dispatch(fetchFilters())
  }
}

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)

export default FiltersContainer
