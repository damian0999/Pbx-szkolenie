import React from 'react';
import RadioButton from '../general/RadioButton';
import ClearFilters from '../general/ClearFilters';

export default class CustomRating extends React.Component{
  render(){
    return(
      <div className='CustomRating Filter'>
        <ClearFilters />
        <p className='filter-name'>Custom Rating</p>
        {this.props.filters.map((rate, idx) => <RadioButton
          key={idx}
          rating={rate}
          chooseFilter={this.props.chooseFilter}
          deleteChooseFilter={this.props.deleteChooseFilter}/>)}
      </div>
    );
  }
}
