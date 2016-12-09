import React from 'react';

export default class Filter extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div key={this.props.el} className='SizeFilter'>
        <div className='flex-container-sizeFilter'>
          <p>{this.props.label}</p>
          <input type='checkbox' />
          <span>90x55 mm</span>
        </div>
        <div className='flex-container-amount'>
          <p>X</p>
          <span>112</span>
        </div>
      </div>
    );
  }
}
