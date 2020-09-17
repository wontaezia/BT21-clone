import React, { Component } from 'react';
import SwitchButton from './SwitchButton/SwitchButton';
import './Filter.scss';

class Filter extends Component {
  render() {
    const { handlefiltering } = this.props;
    return (
      <div className="filterControlBar">
        <div className="buttonBox">
          <div className="filterPopular">
            <button id="popular" onClick={handlefiltering}>
              인기도순
            </button>
          </div>
          <div className="filterAccumulate">
            <button id="accumulate" onClick={handlefiltering}>
              누적판매순
            </button>
          </div>
          <div className="filterLowPrice">
            <button id="lowPrice" onClick={handlefiltering}>
              낮은가격순
            </button>
          </div>
          <div className="filterRecent">
            <button id="recent" onClick={handlefiltering}>
              최신등록순
            </button>
          </div>
          <div className="filterReviewVolume">
            <button id="reviewVolume" onClick={handlefiltering}>
              리뷰많은순
            </button>
          </div>
          <div className="filterHighGrade">
            <button id="highGrade" onClick={handlefiltering}>
              평점높은순
            </button>
          </div>
        </div>
        <div className="viewBox">
          <div className="viewFreeDeliveryBox">
            <SwitchButton />
          </div>
          <div className="controlViewCount"></div>
          <div className="controlImageView">
            <div className="imageViewBox">
              <button className="listView"></button>
            </div>
            <div className="imageViewBox">
              <button className="imageView"></button>
            </div>
            <div className="imageViewBox">
              <button className="bigImageView"></button>
            </div>
            <div className="imageViewBox">
              <button className="galleryView"></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
