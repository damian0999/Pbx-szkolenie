import React from "react";

export default class OrientationFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalCheck: false,
      verticalCheck: false
    }
    this.setOrientationHorizontal = this.setOrientationHorizontal.bind(this);
    this.setOrientationVertical = this.setOrientationVertical.bind(this);
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

  render () {
    return (
      <div className='OrientationFilter Filter'>
        <p className='filter-name'>Orientation</p>
        <div className='horizontal-filter'>
          <svg onClick={() => this.setOrientationHorizontal()} width="1.588cm" height="1.058cm">
            <path  fill={this.state.horizontalCheck ? "rgb(86, 196, 122)" : "rgb(218, 218, 218)"}
              d="M2.000,-0.000 L43.000,-0.000 C44.104,-0.000 45.000,0.895 45.000,2.000 L45.000,28.000 C45.000,29.104 44.104,30.000 43.000,30.000 L2.000,30.000 C0.895,30.000 -0.000,29.104 -0.000,28.000 L-0.000,2.000 C-0.000,0.895 0.895,-0.000 2.000,-0.000 Z"/>
          </svg>
          <p>horizontal</p>
        </div>
        <div className='vertical-filter'>
          <svg onClick={() => this.setOrientationVertical()} width="1.058cm" height="1.588cm">
            <path fill={this.state.verticalCheck ? "rgb(86, 196, 122)" : "rgb(218, 218, 218)"}
              d="M2.000,-0.000 L28.000,-0.000 C29.105,-0.000 30.000,0.895 30.000,2.000 L30.000,43.000 C30.000,44.105 29.105,45.000 28.000,45.000 L2.000,45.000 C0.895,45.000 -0.000,44.105 -0.000,43.000 L-0.000,2.000 C-0.000,0.895 0.895,-0.000 2.000,-0.000 Z"/>
          </svg>
          <p>vertical</p>
        </div>
      </div>
    )
  }
}
