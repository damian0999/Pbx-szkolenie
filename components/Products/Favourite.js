import React from 'react';

export default class Favourite extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favourite: this.props.isFavourite
    }
  }

  setFavourite(){
    this.setState({
      favourite: !this.state.favourite
    });
  }

  render(){
    return(
      <span className='Favourite'>
        <i className={`fa fa-heart ${this.state.favourite ? 'favourite-color' : ''}`}
          onClick={() => this.setFavourite()}
          aria-hidden="true"></i>
      </span>
    );
  }
}
