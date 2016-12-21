import { connect } from 'react-redux';
import { fetchFilters, choosenFilters, deleteChoosenFilter } from '../redux/action/index';
import Filters from '../components/Filters/Filters';

const mapStateToProps = (state, ownProps) =>({
  size: Object.values(state.filters.sizeFilters),
  favourite: Object.values(state.filters.favouriteFilters),
  industry: Object.values(state.filters.industryFilters),
  custom: Object.values(state.filters.customFilters)
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
