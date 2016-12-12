import React from 'react';

import OptionFilter from './OptionFilter';
import CustomRating from './CustomRating';

export default class Filters extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='Filters'>
        <span>Narrow results: </span>
        <OptionFilter />
        <CustomRating />
      </div>
    );
  }
}
