import React, { Component } from 'react';
import SwitchButton from './SwitchButton/SwitchButton';

import './Filter.scss';

class Filter extends Component {
  render() {
    const {
      handlefiltering,
      handleview,
      currentidx,
      currentviewidx,
    } = this.props;
    const filterbutton = [
      ['filterPopular', 'popular', '인기도순'],
      ['filterAccumulate', 'accumulate', '누적판매순'],
      ['filterLowPrice', 'lowPrice', '낮은가격순'],
      ['filterRecent', 'recent', '최신등록순'],
      ['filterReviewVolume', 'reviewVolume', '리뷰많은순'],
      ['filterHighGrade', 'itemGrade', '평점높은순'],
    ];
    const filterbuttonmap = filterbutton.map((e, index) => {
      const [filterName, buttonName, buttonContent] = e;
      return (
        <div className={filterName} key={index}>
          <button
            className={currentidx === index ? 'checked' : buttonName}
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
            currentviewidx === index ? 'imageViewBoxChecked' : 'imageViewBox'
          }
          id={buttonName}
          onClick={handleview}
          key={index}
        >
          <button
            className={
              currentviewidx === index ? `${buttonName}Checked` : buttonName
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
          <div className="controlViewCount"></div>
          <div className="controlImageView">{viewbuttonmap}</div>
        </div>
      </div>
    );
  }
}

export default Filter;
