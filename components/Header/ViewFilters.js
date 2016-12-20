import React from 'react';
import './dropdownButton';

export default class ViewFilters extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: false,
      selectedOption: '20'
    }
  }

  dropDownButton() {
    this.setState({
        show: !this.state.show
    });
  }

  render(){
    return(
      <div className='ViewFilters'>
        <div className="dropdown" onClick={() => this.dropDownButton()}>
          <button className="dropbtn"> Show: <span>{this.state.selectedOption}</span></button>

          <div id="myDropdown" className={`dropdown-content ${this.state.show ? 'show' : ''}`}>
            <a href="#">40</a>
            <a href="#">80</a>
            <a href="#">All</a>
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
