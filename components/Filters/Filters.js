import React from 'react';

import Orientation from './Orientation';
import CustomRating from './CustomRating';
import CheckboxFilterGroup from './CheckboxFilterGroup'

export default class Filters extends React.Component{

  componentWillMount(){
    this.props.onFetchFilters();
  }

  render(){
    return(
      <div className='Filters'>
        <h3>Narrow results: </h3>
        <Orientation chooseFilter={this.props.chooseFilter} deleteChooseFilter={this.props.deleteChooseFilter} />
        <CheckboxFilterGroup name='Size' filters={this.props.size} chooseFilter={this.props.chooseFilter} deleteChooseFilter={this.props.deleteChooseFilter}/>
        <CustomRating filters={this.props.custom}/>
        <CheckboxFilterGroup name='Favourite' filters={this.props.favourite} chooseFilter={this.props.chooseFilter} deleteChooseFilter={this.props.deleteChooseFilter}/>
        <CheckboxFilterGroup name='Industry' filters={this.props.industry} chooseFilter={this.props.chooseFilter} deleteChooseFilter={this.props.deleteChooseFilter}/>
      </div>
    );
  }
}
