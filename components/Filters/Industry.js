import React from "react";
import Checkbox from "../general/Checkbox";

export default class Industry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      industries: [
        {label: "All", amount: "840", isChecked: false},
        {label: "Automotive", amount: "112", isChecked: false},
        {label: "Fashion", amount: "83", isChecked: false},
        {label: "Law", amount: "230", isChecked: false},
        {label: "IT", amount: "18", isChecked: false},
        {label: "Sport", amount: "66", isChecked: false},
        {label: "Art", amount: "20", isChecked: false},
        {label: "+ Show more ...", amount: "311", isChecked: false}
      ]
    };
  }

  _showIndustry() {
    return (
      this.state.industries.map((el, idx) => {
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
    const industries = this._showIndustry();
    return (
      <div className='Industry Filter'>
        <p className='filter-name'>Industry</p>
        {industries}
      </div>
    )
  }
}
