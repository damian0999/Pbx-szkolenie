import React from "react";
import Checkbox from "../general/Checkbox";
import ClearFilters from '../general/ClearFilters';

export default class Industry extends React.Component {
  constructor(props) {
    super(props);
  }

  showIndustry() {
    return (
      this.props.filters.map((el, idx) => {
        return (
          <Checkbox
            key={idx}
            label={el.label}
            amount={el.amount}
            checked={el.isChecked}
            />
        )
      })
    )
  }

  render () {
    return (
      <div className='Industry Filter'>
        <ClearFilters />
        <p className='filter-name'>Industry</p>
        {this.showIndustry()}
      </div>
    )
  }
}
