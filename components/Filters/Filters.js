import React from 'react';

import Filter from './Filter'

export default class Filters extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const labels = ['size', 'favourite', 'industry'];
    return(
      <div>
        <h1>Filters: </h1>
        {labels.map((el) => <Filter label={el}/>)}
      </div>
    );
  }
}
