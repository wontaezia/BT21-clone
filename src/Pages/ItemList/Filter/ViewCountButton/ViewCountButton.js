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
    const COUNT_OPTION = [20, 40, 60, 80];
    const countOptionLists = COUNT_OPTION.map((number, index) => (
      <li
        key={index}
        id={number}
        className={Number(number) === Number(selectNum) ? 'select' : 'normal'}
        onMouseEnter={changeSelect}
      >
        {number}개씩 보기
      </li>
    ));
    return (
      <div className="viewCountButtonContainer">
        <div className="selectedView" onClick={handlePopup}>
          <button
            className={popup ? 'defaultUp' : 'defaultDown'}
            value={num}
            onClick={handlePopup}
          >
            {num}개씩 보기
          </button>
        </div>
        <ul
          className={popup ? 'selectOption' : 'invisibleSelectOption'}
          onClick={selectViewCount}
        >
          {countOptionLists}
        </ul>
      </div>
    );
  }
}

export default ViewCountButton;
