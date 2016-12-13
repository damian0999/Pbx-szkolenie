import React from 'react';
import FilterResults from './FilterResults';
import ViewFilters from './ViewFilters'

export default class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='Header'>
        <FilterResults />
        <ViewFilters />
      </div>
    );
  }
}
