import React from 'react';
import Checkbox from '../general/Checkbox';
import ClearFilters from '../general/ClearFilters';

export default class OptionFilter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sizes: [
        {label: "90x50mm", amount: "122", isChecked: false},
        {label: "85x55mm", amount: "67", isChecked: false}
      ]
    }
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
        {this.state.sizes.map((el, idx) => this.showCheckbox(el, idx))}
      </div>
    );
  }
}
