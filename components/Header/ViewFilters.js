import React from 'react';
import './dropdownButton';

export default class ViewFilters extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: false,
      selectedOption: '20',
      previousSelectedOption: '',
      options: ['40', '80', 'All']
    }
  }

  dropDownButton(){
    this.setState({
        show: !this.state.show
    });
  }

  selectOption(option, index){
    this.state.previousSelectedOption = this.state.selectedOption;
    this.state.options[index] = this.state.previousSelectedOption;
    this.state.options.sort();
    this.setState({
      selectedOption: option
    });
  }

  render(){
    return(
      <div className='ViewFilters'>
        <div className="dropdown" onClick={() => this.dropDownButton()}>
          <button className="dropbtn"> Show: <span>{this.state.selectedOption}</span></button>

          <div id="myDropdown" className={`dropdown-content ${this.state.show ? 'show' : ''}`}>
            {this.state.options.map((option, index) => <p key={index} onClick={() => this.selectOption(option, index)}>{option}</p>)}
          </div>

        </div>
        <div className='columns-filter'>
          <img src='../../public/images/4columns.svg'/>
          <img src='../../public/images/3columns.svg'/>
          <img src='../../public/images/2columns.svg'/>
        </div>
      </div>
    );
  }
}
