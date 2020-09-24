import React, { Component } from 'react';
import './SwitchButton.scss';

class SwitchButton extends Component {
  render() {
    return (
      <div className="switchButtonContainer">
        <label className="text" htmlFor="viewFreeDelivery">
          무료배송
        </label>
        <input type="checkbox" id="viewFreeDelivery" />
        <label className="toggleBackground" htmlFor="viewFreeDelivery">
          <span className="on">ON</span>
          <span className="off">OFF</span>
        </label>
        <label className="ball" htmlFor="viewFreeDelivery" />
      </div>
    );
  }
}

export default SwitchButton;
