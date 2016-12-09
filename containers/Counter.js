import { connect } from 'react-redux';
import { decrement } from '../redux/action/index';
import Counter from '../components/Counter';

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
)(Counter)

export default CounterContainer
