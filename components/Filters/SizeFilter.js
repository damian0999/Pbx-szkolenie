import React from 'react';
import Checkbox from '../general/Checkbox';
import ClearFilters from '../general/ClearFilters';

export default class SizeFilter extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='SizeFilter Filter'>
        <ClearFilters />
        <p className='filter-name'>Size</p>
        {this.props.filters.map((filter, idx) =>
          <Checkbox key={idx}
                    label={filter.label}
                    amount={filter.amount}
                    isChecked={filter.isChecked}
                    chooseFilter={this.props.chooseFilter}/>)}
      </div>
    );
  }
}
