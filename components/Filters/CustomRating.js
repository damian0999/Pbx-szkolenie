import React from 'react';
import RadioButton from '../general/RadioButton'

export default class CustomRating extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      stars:[
        {src: '../../public/images/4stars.png', amount: '62'},
        {src: '../../public/images/3stars.png', amount: '9'},
        {src: '../../public/images/2stars.png', amount: '18'},
        {src: '../../public/images/1star.png', amount: '22'}
      ]
    }
  }

  setStarsImage(el,idx){
    return(
      <RadioButton key={idx} radio={el}/>
    );
  }

  render(){
    return(
      <div className='CustomRating Filter'>
        <p className='filter-name'>Custom Rating</p>
        {this.state.stars.map((el, idx) => this.setStarsImage(el, idx))}
      </div>
    );
  }
}
