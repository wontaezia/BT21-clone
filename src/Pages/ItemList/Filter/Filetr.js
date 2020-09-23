import React, { Component } from 'react';
import SwitchButton from './SwitchButton/SwitchButton';
import ViewCountButton from './ViewCountButton/ViewCountButton';
import './Filter.scss';

class Filter extends Component {
  render() {
    const {
      handleFiltering,
      handleView,
      currentIdx,
      currentViewIdx,
      num,
      popup,
      selectNum,
      handlePopup,
      selectViewCount,
      changeSelect,
    } = this.props;

    const FILTER_BUTTONS = [
      ['popular', '인기도순', 'recent'],
      ['accumulate', '누적판매순', 'review'],
      ['lowPrice', '낮은가격순', 'price'],
      ['recent', '최신등록순', 'recent'],
      ['reviewVolume', '리뷰많은순', 'review'],
      ['itemGrade', '평점높은순', 'grade'],
    ];

    const VIEW_BUTTONS = [
      'listView',
      'imageView',
      'bigImageView',
      'galleryView',
    ];

    return (
      <div className="filterContainer">
        <div className="buttonBox">
          {FILTER_BUTTONS.map((e, index) => {
            const [buttonName, buttonContent, sort] = e;
            return (
              <div className="filter" key={index}>
                <button
                  name={sort}
                  className={currentIdx === index ? 'checked' : buttonName}
                  onClick={handleFiltering}
                >
                  {buttonContent}
                </button>
              </div>
            );
          })}
        </div>
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
          <div className="controlImageView">
            {VIEW_BUTTONS.map((buttonName, index) => {
              return (
                <div
                  className={
                    currentViewIdx === index
                      ? 'imageViewBoxChecked'
                      : 'imageViewBox'
                  }
                  id={buttonName}
                  onClick={handleView}
                  key={index}
                >
                  <button
                    className={
                      currentViewIdx === index
                        ? `${buttonName}Checked`
                        : buttonName
                    }
                  ></button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
