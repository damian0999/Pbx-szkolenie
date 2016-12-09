import React from 'react';
import Counter from '../containers/Counter'

export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>React</h1>
        <Counter />
      </div>
    );
  }
}
