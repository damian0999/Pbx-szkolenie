import React from "react";
import Checkbox from "../general/Checkbox";
import ClearFilters from '../general/ClearFilters';

export default class Filter extends React.Component {
  render(){
    return(
      <div className='Filter'>
        <ClearFilters />
        <p className='filter-name'>{this.props.name}</p>
        {this.props.filters.map((filter, idx) =>
          <Checkbox key={idx}
                    label={filter.label}
                    amount={filter.amount}
                    checked={filter.isChecked}
                    chooseFilter={this.props.chooseFilter}
                    deleteChooseFilter={this.props.deleteChooseFilter} />)}
      </div>
    )
  }
}
