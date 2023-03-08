/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    // eslint-disable-next-line consistent-return
    this.setState(prevState => {
      if (prevState.speed < 200) {
        return {speed: prevState.speed + 10}
      }
    })
  }

  brake = () => {
    // eslint-disable-next-line consistent-return
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return {speed: prevState.speed - 10}
      }
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading"> SPEEDOMETER </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="speedHeading">Speed is {speed}mph</h1>
        <p className="description"> Min Limit is 0mph, max Limit is 200mph </p>
        <div className="buttonsContainer">
          <button className="accelerateButton" onClick={this.accelerate}>
            Accelerate
          </button>
          <button className="brakeButton" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
