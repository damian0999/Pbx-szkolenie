import React from 'react';

export default class OptionFilter extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='OptionFilter'>
        <p className='filter-name'>Size</p>

        <div className='flex-container-option'>
          <div className='filter-option'>
            <input type="checkbox" name='checkbox' className="checkbox"/>
            <label htmlFor="checkbox" className="filter-label">90x50mm</label>
          </div>
          <div className='filter-option'>
            <input type="checkbox" name='checkbox' className="checkbox" />
            <label htmlFor="checkbox" className="filter-label">85x55</label>
          </div>
        </div>

        <div className='flex-container-amount'>
          <div className='filter-amount'>
            <span>122</span>
          </div>
          <div className='filter-amount'>
            <span>67</span>
          </div>
        </div>

      </div>
    );
  }
}
