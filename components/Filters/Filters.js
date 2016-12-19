import React from 'react';

import Orientation from './Orientation';
import CustomRating from './CustomRating';

import Filter from './Filter'

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
        <Orientation chooseFilter={this.props.chooseFilter} deleteChooseFilter={this.props.deleteChooseFilter} />
        <Filter name='Size' filters={this.props.size} chooseFilter={this.props.chooseFilter} deleteChooseFilter={this.props.deleteChooseFilter}/>
        <CustomRating />
        <Filter name='Favourite' filters={this.props.favourite} chooseFilter={this.props.chooseFilter} deleteChooseFilter={this.props.deleteChooseFilter}/>
        <Filter name='Industry' filters={this.props.industry} chooseFilter={this.props.chooseFilter} deleteChooseFilter={this.props.deleteChooseFilter}/>
      </div>
    );
  }
}
