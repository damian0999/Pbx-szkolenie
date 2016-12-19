import React from "react";
import Horizontal from './Svg/Horizontal'
import Vertical from './Svg/Vertical'

export default class Orientation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalCheck: false,
      verticalCheck: false
    }
  }

  setOrientationHorizontal() {
    this.setState({
      horizontalCheck: !this.state.horizontalCheck
    });
  }

  setOrientationVertical() {
    this.setState({
      verticalCheck: !this.state.verticalCheck
    });
  }

  render(){
    return(
      <div className="OrientationFilter Filter">
        <p className='filter-name'>Orientation</p>
        <div>
          <Horizontal state={this.state.horizontalCheck} setOrientation={this.setOrientationHorizontal.bind(this)}/>
          <label htmlFor="horizontal">horizontal</label>
        </div>
        <div>
          <Vertical state={this.state.verticalCheck} setOrientation={this.setOrientationVertical.bind(this)}/>
          <label htmlFor="vertical">vertical</label>
        </div>
      </div>
    )
  }
}
