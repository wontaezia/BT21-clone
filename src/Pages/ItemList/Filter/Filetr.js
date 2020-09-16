import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {
  render() {
    return (
      <div className="filterControlBar">
        <div className="buttonBox">
          <button className="filter">인기도순</button>
          <button className="filter">누적판매순</button>
          <button className="filter">낮은가격순</button>
          <button className="filter">최신등록순</button>
          <button className="filter">리뷰많은순</button>
          <button className="filter">평점높은순</button>
        </div>
        <div className="viewBox">
          <div className="viewFreeDelivery">
            <label for="delivery">무료배송</label>
            <input type="checkbox" id="deliveryButton"></input>
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
