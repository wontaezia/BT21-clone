import React, { Component } from 'react';
import './SwitchButton.scss';

class SwitchButton extends Component {
  viewDelivery = () => {};
  render() {
    return (
      <div className="toggleButton" onClick={this.viewDelivery}>
        <label className="text" htmlFor="viewFreeDelivery">
          무료배송
        </label>
        <input type="checkbox" id="viewFreeDelivery"></input>
        <label className="toggleBackground" htmlFor="viewFreeDelivery">
          <span className="on">ON</span>
          <span className="off">OFF</span>
        </label>
        <div className="ball"></div>
      </div>
    );
  }
}

export default SwitchButton;
