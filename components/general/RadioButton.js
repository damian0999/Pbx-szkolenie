import React from "react";

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  setRadio(){
    this.setState({
      checked: !this.state.checked
    });
  }

  selectRadio(){
    if(this.state.checked){
      return '../../public/images/radio-checked.svg'
    } else {
      return '../../public/images/radio-unchecked.svg'
    }
  }

  render () {
    return (
      <div className='Checkbox'>
        <div className='flex-container-option'>
          <div className='filter-option'>
              <img src={this.selectRadio()} name='radio' className='checkbox' onClick={() => this.setRadio()}/>
              <label htmlFor="radio" className="filter-label">
                <img src={this.props.radio.src}/>
              </label>
            </div>
          </div>
          <div className='flex-container-amount'>
            <div className='filter-amount'>
              <span>{this.props.radio.amount}</span>
            </div>
          </div>
        </div>
      );
    }
  }
