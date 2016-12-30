import React from 'react';

export default class Favourite extends React.Component {
  render(){
    return(
      <span className='Favourite'>
        <i className={`fa fa-heart ${this.props.isFavourite ? 'favourite-color' : ''}`}
          onClick={() => this.props.toggleFavourite()}
          aria-hidden="true"></i>
      </span>
    );
  }
}
