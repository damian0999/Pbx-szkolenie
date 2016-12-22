import React from 'react';
import FilterResults from './FilterResults';
import ViewFilters from './ViewFilters'

export default class Header extends React.Component{
  render(){
    return(
      <div className='Header'>
        <FilterResults selectedFilters={this.props.selectedFilters} amountOfProducts={this.props.amountOfProducts}/>
        <ViewFilters />
      </div>
    );
  }
}
