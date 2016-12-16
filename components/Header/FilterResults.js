import React from 'react';

export default class FilterResults extends React.Component{
  constructor(props){
    super(props);
  }

  showSelectedFilter(selected, idx){
    return(
      <span key={idx}>{selected.label}<i className="fa fa-times" aria-hidden="true"></i></span>
    );
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
          {this.props.selectedFilters.map((selected, idx) => this.showSelectedFilter(selected, idx))}
        </div>
      </div>
    );
  }
}
