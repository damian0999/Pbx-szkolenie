import React from 'react';

export default class FilterResults extends React.Component{
  render(){
    return(
      <div className='FilterResults'>
        <div className='search-results'>
          <p>Search Results: </p>
          <span>72</span>
        </div>
        <div className='selected-filters'>
          <p>Showing Filters: </p>
          {this.props.selectedFilters.map((selected, idx) =>
          <span key={idx}>{selected}<i className="fa fa-times" aria-hidden="true"></i></span>)}
        </div>
      </div>
    );
  }
}
