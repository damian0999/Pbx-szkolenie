import { connect } from 'react-redux';
import { fetchFilters, choosenFilters, deleteChoosenFilter } from '../redux/action/index';
import Filters from '../components/Filters/Filters';

const mapStateToProps = (state, ownProps) =>({
  size: state.filters.sizeFilters,
  favourite: state.filters.favouriteFilters,
  industry: state.filters.industryFilters,
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    onFetchFilters: () => dispatch(fetchFilters()),
    chooseFilter: (filter, index) => dispatch(choosenFilters(filter, index)),
    deleteChooseFilter: (index, label) => dispatch(deleteChoosenFilter(index, label))
  }
}

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters)

export default FiltersContainer
