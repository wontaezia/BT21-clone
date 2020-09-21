import React, { Component } from 'react';
import './ViewCountButton.scss';

class ViewCountButton extends Component {
  constructor() {
    super();

    this.state = {
      popup: false,
      num: 40,
      selectNum: 0,
    };
  }
  handlePopup = () => {
    const { popup } = this.state;
    this.setState({
      popup: !popup,
    });
  };

  selectViewCount = (e) => {
    const { id } = e.target;
    this.setState({
      num: id,
    });
    this.handlePopup();
  };

  changeSelect = (e) => {
    const { id } = e.target;
    this.setState({ selectNum: id });
  };

  render() {
    const { num, popup, selectNum } = this.state;
    return (
      <div className="selectContainer">
        <div className="selectedView" onClick={this.handlePopup}>
          <button
            className={popup ? 'defaultUp' : 'defaultDown'}
            value={num}
            onClick={this.handlePopup}
          >
            {num}개씩 보기
          </button>
        </div>
        <ul
          className="selectOption"
          style={{ display: popup ? 'block' : 'none' }}
          onClick={(e) => this.selectViewCount(e)}
        >
          <li
            id="20"
            className={20 == selectNum ? 'select' : 'normal'}
            onMouseEnter={this.changeSelect}
          >
            20개씩 보기
          </li>
          <li
            id="40"
            className={40 == selectNum ? 'select' : 'normal'}
            onMouseEnter={this.changeSelect}
          >
            40개씩 보기
          </li>
          <li
            id="60"
            className={60 == selectNum ? 'select' : 'normal'}
            onMouseEnter={this.changeSelect}
          >
            60개씩 보기
          </li>
          <li
            id="80"
            className={80 == selectNum ? 'select' : 'normal'}
            onMouseEnter={this.changeSelect}
          >
            80개씩 보기
          </li>
        </ul>
      </div>
    );
  }
}

export default ViewCountButton;
