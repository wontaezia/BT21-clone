import React, { Component } from 'react';
import './MainBottomBanner.scss';

class MainBottomBanner extends Component {
  render() {
    return (
      <div className="MainBottomBanner">
        <div className="mainBottomContent">
          <img
            alt="라인프렌즈 로고"
            src="https://shop-phinf.pstatic.net/20200504_266/15885838951995RqN3_PNG/b_logo.png"
          />
          <p>
            끝없는 득템의 재미
            <br /> 라인프렌즈 공식 브랜드스토어 <br />
            #라인프렌즈 #BT21 #브롤스타즈
          </p>
          <div className="wrapMainBottomBannerButton">
            <button className="mainBottomBannerWishButton">
              <span className="wishIcon"></span>
              <span className="wishText">찜하기 97,115</span>
            </button>
            <button className="mainBottomBannerShare">
              <span className="shareIcon"></span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBottomBanner;
