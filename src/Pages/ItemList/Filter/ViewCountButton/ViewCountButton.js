import React, { Component } from 'react';
import './ViewCountButton.scss';

class ViewCountButton extends Component {
  render() {
    const {
      num,
      popup,
      selectNum,
      handlePopup,
      selectViewCount,
      changeSelect,
    } = this.props;
    const countOption = [20, 40, 60, 80];
    const countOptionLists = countOption.map((number, index) => (
      <li
        key={index}
        id={number}
        className={number == selectNum ? 'select' : 'normal'}
        onMouseEnter={(e) => changeSelect(e)}
      >
        {number}개씩 보기
      </li>
    ));
    return (
      <div className="selectContainer">
        <div className="selectedView" onClick={() => handlePopup()}>
          <button
            className={popup ? 'defaultUp' : 'defaultDown'}
            value={num}
            onClick={() => handlePopup()}
          >
            {num}개씩 보기
          </button>
        </div>
        <ul
          className="selectOption"
          style={{ display: popup ? 'block' : 'none' }}
          onClick={(e) => selectViewCount(e)}
        >
          {countOptionLists}
        </ul>
      </div>
    );
  }
}

export default ViewCountButton;
