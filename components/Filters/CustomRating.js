import React from 'react';

export default class CustomRating extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='CustomRating'>
        <p className='filter-name'>Custom Rating</p>

        <div className='flex-container-option'>
          <div className='filter-option'>
            <input type="radio" name='radio' className="radio-button"/>
            <label htmlFor="radio" className="filter-label">
              <img src='../../public/images/stars.png'/>
            </label>
          </div>
          <div className='filter-option'>
            <input type="radio" name='radio' className="radio-button"/>
            <label htmlFor="radio" className="filter-label">
              <img src='../../public/images/stars.png'/>
            </label>
          </div>
          <div className='filter-option'>
            <input type="radio" name='radio' className="radio-button"/>
            <label htmlFor="radio" className="filter-label">
              <img src='../../public/images/stars.png'/>
            </label>
          </div>
        </div>

        <div className='flex-container-amount'>
          <div className='filter-amount'>
            <span>83</span>
          </div>
          <div className='filter-amount'>
            <span>128</span>
          </div>
          <div className='filter-amount'>
            <span>18</span>
          </div>
        </div>

      </div>
    );
  }
}
