import React, { Component } from 'react';
import SwitchButton from './SwitchButton/SwitchButton';
import ViewCountButton from './ViewCountButton/ViewCountButton';

import './Filter.scss';

class Filter extends Component {
  render() {
    const {
      handlefiltering,
      handleview,
      currentIdx,
      currentViewIdx,
      num,
      popup,
      selectNum,
      handlePopup,
      selectViewCount,
      changeSelect,
    } = this.props;

    const filterbutton = [
      ['filterPopular', 'popular', '인기도순', 'recent'],
      ['filterAccumulate', 'accumulate', '누적판매순', 'review'],
      ['filterLowPrice', 'lowPrice', '낮은가격순', 'price'],
      ['filterRecent', 'recent', '최신등록순', 'recent'],
      ['filterReviewVolume', 'reviewVolume', '리뷰많은순', 'review'],
      ['filterHighGrade', 'itemGrade', '평점높은순', 'grade'],
    ];
    const filterbuttonmap = filterbutton.map((e, index) => {
      const [filterName, buttonName, buttonContent, sort] = e;
      return (
        <div className={filterName} key={index}>
          <button
            name={sort}
            className={currentIdx === index ? 'checked' : buttonName}
            onClick={handlefiltering}
          >
            {buttonContent}
          </button>
        </div>
      );
    });

    const viewbutton = ['listView', 'imageView', 'bigImageView', 'galleryView'];
    const viewbuttonmap = viewbutton.map((buttonName, index) => {
      return (
        <div
          className={
            currentViewIdx === index ? 'imageViewBoxChecked' : 'imageViewBox'
          }
          id={buttonName}
          onClick={handleview}
          key={index}
        >
          <button
            className={
              currentViewIdx === index ? `${buttonName}Checked` : buttonName
            }
          ></button>
        </div>
      );
    });
    return (
      <div className="filterControlBar">
        <div className="buttonBox">{filterbuttonmap}</div>
        <div className="viewBox">
          <div className="viewFreeDeliveryBox">
            <SwitchButton />
          </div>
          <div className="controlViewCount">
            <ViewCountButton
              num={num}
              popup={popup}
              selectNum={selectNum}
              handlePopup={handlePopup}
              selectViewCount={selectViewCount}
              changeSelect={changeSelect}
            />
          </div>
          <div className="controlImageView">{viewbuttonmap}</div>
        </div>
      </div>
    );
  }
}

export default Filter;
