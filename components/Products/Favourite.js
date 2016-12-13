import React from 'react';

export default class Favourite extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      favourite: this.props.isFavourite
    }
  }

  selectFavourite(){
    this.setState({
      favourite: !this.state.favourite
    });
  }

  setFavourite() {
    if(this.state.favourite) {
      return "../../public/images/HeartRed.png"

    } else {
      return "../../public/images/HeartGray.png"
    }
  }

  render(){
    return(
      <span>
        <img src={this.setFavourite()}
          alt="favourite"
          className='favourite-image'
          onClick={() => this.selectFavourite()}/>
      </span>
    );
  }
}
