import { connect } from 'react-redux';
import { decrement } from '../redux/action/index';
import Products from '../components/Products/Products';

const mapStateToProps = (state, ownProps) =>({
  count: state.count
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    onDecrement: () => dispatch(decrement())
  }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)

export default CounterContainer
