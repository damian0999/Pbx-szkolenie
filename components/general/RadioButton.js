import React from "react";
import Rating from '../general/Rating'

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.rating.isChecked
    };
  }

  setRadio(rate){
    if(!this.state.checked){
      this.props.chooseFilter("Rating " +rate);
      this.setState({
        checked: true
      });
    } else {
      this.props.deleteChooseFilter('Rating '+rate);
      this.setState({
        checked: false
      });
    }
  }

  selectRadio(){
    if(this.state.checked){
      return '../../public/images/radio-checked.svg'
    } else {
      return '../../public/images/radio-unchecked.svg'
    }
  }

  render(){
    return(
      <div className='Checkbox'>
        <div className='flex-container-option'>
          <div className='filter-option'>
              <img src={this.selectRadio()} name='radio' className='checkbox' onClick={() => this.setRadio(this.props.rating.rate)}/>
              <label htmlFor="radio" className="filter-label">
                <Rating rating={this.props.rating.rate}/>
              </label>
            </div>
          </div>
          <div className='flex-container-amount'>
            <div className='filter-amount'>
              <span>{this.props.rating.amount}</span>
            </div>
          </div>
        </div>
      );
    }
  }
