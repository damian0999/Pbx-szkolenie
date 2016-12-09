function counter(state = {result: 0}, action){
  switch(action.type){
    case 'DECREMENT':
      return Object.assign({}, state, {
        result: state.result - 1
      });
    default:
      return state;
  }
}

export default counter;
