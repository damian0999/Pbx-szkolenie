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
    if(!this.state.horizontalCheck){
      this.props.chooseFilter('horizontal')
      this.setState({
        horizontalCheck: true
      });
    } else {
      this.props.deleteChooseFilter('horizontal')
      this.setState({
        horizontalCheck: false
      });
    }
  }

  setOrientationVertical() {
    if(!this.state.verticalCheck) {
      this.props.chooseFilter('vertical')
      this.setState({
        verticalCheck: true
      });
    } else {
      this.props.deleteChooseFilter('vertical');
      this.setState({
        verticalCheck: false
      });
    }
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
