import React from 'react';
import './dropdownButton';

export default class ViewFilters extends React.Component{
  constructor(props){
    super(props);
  }

  dropDownButton() {
      document.getElementById("myDropdown").classList.toggle("show");
  }

  render(){
    return(
      <div className='ViewFilters'>
        <div className="dropdown">
          <button onClick={() => this.dropDownButton()} className="dropbtn">Show: <span>20</span></button>
          <div id="myDropdown" className="dropdown-content">
            <a href="#">40</a>
            <a href="#">80</a>
            <a href="#">All</a>
          </div>
        </div>
        <div className='columns-filter'>
          <img src='../../public/images/4columns.png'/>
          <img src='../../public/images/3columns.png'/>
          <img src='../../public/images/2columns.png'/>
        </div>
      </div>
    );
  }
}
