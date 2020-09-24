import React, { Component } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import './PopUp.scss';

class PopUp extends Component {
  render() {
    const {
      isActive,
      currentReview,
      reviews,
      max,
      goToNextPage,
      goToPrevPage,
      closeModal,
    } = this.props;

    const { reviewer, grade, detail, registerDate, photo } = reviews;
    return (
      <div
        onClick={closeModal}
        className={isActive ? 'PopUp isActive' : 'PopUp'}
      >
        <div className="inner">
          <h3>
            리뷰 {currentReview + 1}
            <span>{` / ${max}`}</span>
          </h3>
          <div className="content">
            <div className="reviewImage">
              {photo && <img src={photo} alt="리뷰 이미지" />}
            </div>
            <div className="userInfo">
              <div className="userPhoto">
                <img
                  src="https://profile-phinf.pstatic.net/404/default.png?type=f80_80"
                  alt="유저 이미지"
                />
              </div>
              <div className="textInfo">
                <div className="rating">
                  <span
                    className="ratingIcon"
                    style={{
                      transform: `translateX(-${(5 - grade) * 15}px)`,
                    }}
                  />
                  <span className="ratingIconBackground" />
                  <span>{grade}</span>
                </div>
                <div className="reviewer">
                  <span className="userName">{reviewer}</span>
                  <span className="date">{registerDate}</span>
                  <span className="option">사이즈: 단품</span>
                </div>
              </div>
            </div>
            <p className="review">{detail}</p>
            <FiArrowLeftCircle onClick={goToPrevPage} className="prevButton" />
            <FiArrowRightCircle onClick={goToNextPage} className="nextButton" />
          </div>
        </div>
      </div>
    );
  }
}

export default PopUp;
