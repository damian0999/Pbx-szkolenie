import React from 'react';
import Checkbox from '../general/Checkbox';
import ClearFilters from '../general/ClearFilters';

export default class SizeFilter extends React.Component{
  constructor(props){
    super(props);
  }

  showCheckbox(el, idx){
    return(
      <Checkbox key={idx} label={el.label} amount={el.amount} isChecked={el.isChecked}/>
    );
  }

  render(){
    return(
      <div className='SizeFilter Filter'>
        <ClearFilters />
        <p className='filter-name'>Size</p>
        {this.props.filters.map((el, idx) => this.showCheckbox(el, idx))}
      </div>
    );
  }
}
