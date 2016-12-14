import React from 'react';

import Orientation from './Orientation';
import SizeFilter from './SizeFilter';
import CustomRating from './CustomRating';

export default class Filters extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='Filters'>
        <span>Narrow results: </span>
        <Orientation />
        <SizeFilter />
        <CustomRating />
      </div>
    );
  }
}
