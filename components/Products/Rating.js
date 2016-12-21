import React from 'react'

export default class Rating extends React.Component{
  render(){

    const stars = [];
    for (let i = 0; i < 5; i++) {
      if(i < this.props.rating){
        stars.push(1);
      } else {
        stars.push(0);
      }
    }

    return(
      <div className='Rating'>
        {stars.map((star, index) => {
          if(star == 1){
            return (
              <i key={index} className="fa fa-star color-star" aria-hidden="true"></i>
            );
          } else {
            return(
              <i  key={index} className="fa fa-star" aria-hidden="true"></i>
            );
          }
        })}
      </div>
    );
  }
}
