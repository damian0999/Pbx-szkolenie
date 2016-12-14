import React from "react";

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.isChecked
    };
  }

  setCheckbox() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render () {
    return (
      <div className='Checkbox'>
        <div className='flex-container-option'>
          <div className='filter-option'>
              <input type="checkbox" name='checkbox' className="checkbox" onClick={this.setCheckbox.bind(this)}/>
              <label htmlFor="checkbox" className="filter-label">{this.props.label}</label>
            </div>
          </div>
          <div className='flex-container-amount'>
            <div className='filter-amount'>
              <span>{this.props.amount}</span>
            </div>
          </div>
        </div>
      );
    }
  }
