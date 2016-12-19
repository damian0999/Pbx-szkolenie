import React from "react";

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.isChecked
    };
  }

  setCheckbox(label){
    if(!this.state.checked){
      this.props.chooseFilter(label);
      this.setState({
        checked: true
      });
    } else {
      this.props.deleteChooseFilter(label);
      this.setState({
        checked: false
      });
    }
  }

  selectCheckbox() {
    if(this.state.checked){
      return '../../public/images/checkbox-checked.png'
    } else {
      return '../../public/images/checkbox-unchecked.png'
    }
  }

  render(){
    return(
      <div className='Checkbox'>
        <div className='flex-container-option'>
          <div className='filter-option'>
              <img src={this.selectCheckbox()} name='checkbox' className='checkbox' onClick={() => this.setCheckbox(this.props.label)}/>
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
