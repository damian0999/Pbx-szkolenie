import React from 'react';

export default class FilterResults extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='FilterResults'>
        <div className='search-results'>
          <p>Search Results: </p>
          <span>72</span>
        </div>
        <div className='selected-filters'>
          <p>Showing Filters: </p>
          <span>Horizontal <i className="fa fa-times" aria-hidden="true"></i></span>
          <span>90x50mm <i className="fa fa-times" aria-hidden="true"></i></span>
          <span>Automotive <i className="fa fa-times" aria-hidden="true"></i></span>
          <span>Sport <i className="fa fa-times" aria-hidden="true"></i></span>
          <span>Art <i className="fa fa-times" aria-hidden="true"></i></span>
          <span>Music <i className="fa fa-times" aria-hidden="true"></i></span>
        </div>
      </div>
    );
  }
}
