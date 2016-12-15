import React from 'react';

import Orientation from './Orientation';
import SizeFilter from './SizeFilter';
import CustomRating from './CustomRating';
import Favourite from './Favourite';
import Industy from './Industry'

export default class Filters extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.onFetchFilters();
  }

  render(){
    return(
      <div className='Filters'>
        <h3>Narrow results: </h3>
        <Orientation />
        <SizeFilter filters={this.props.size}/>
        <CustomRating />
        <Favourite filters={this.props.favourite}/>
        <Industy filters={this.props.industry}/>
      </div>
    );
  }
}
