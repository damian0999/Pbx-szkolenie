import React from "react";
import Checkbox from "../general/Checkbox";
import ClearFilters from '../general/ClearFilters';

export default class Favorite extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Favourite Filter'>
        <ClearFilters />
        <p className='filter-name'>Favorite</p>
        <Checkbox
          label={this.props.filters.label}
          amount={this.props.filters.amount}
          checked={this.props.filters.isChecked}
          />
      </div>
    )
  }

}
