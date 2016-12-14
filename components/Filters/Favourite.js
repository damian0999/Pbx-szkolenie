import React from "react";
import Checkbox from "../general/Checkbox";
import ClearFilters from '../general/ClearFilters';

export default class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "Only favorites",
      amount: '22',
      isChecked: false
    }
  }

  showFavourite() {
    return (
      <Checkbox
        label={this.state.label}
        amount={this.state.amount}
        checked={this.state.isChecked}
        />
    )
  }

  render() {
    return (
      <div className='Favourite Filter'>
        <ClearFilters />
        <p className='filter-name'>Favorite</p>
        {this.showFavourite()}
      </div>
    )
  }

}
