import React, { Component } from 'react';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { FiArrowRightCircle } from 'react-icons/fi';
import './PopUp.scss';

class PopUp extends Component {
  render() {
    const {
      isActive,
      currentReview,
      reviewData,
      max,
      goToNextPage,
      goToPrevPage,
      closeModal,
    } = this.props;

    const {
      userName,
      userImage,
      rating,
      review,
      date,
      photo,
      option,
    } = reviewData;
    return (
      <div
        onClick={closeModal}
        className={isActive ? 'popUp isActive' : 'popUp'}
      >
        <div className="inner">
          <h3>
            포토 리뷰 {currentReview + 1}
            <span>{` / ${max}`}</span>
          </h3>
          <div className="content">
            <div className="reviewImage">
              <img src={photo} alt="리뷰 이미지" />
            </div>
            <div className="userInfo">
              <div className="userPhoto">
                <img src={userImage} alt="유저 이미지" />
              </div>
              <div className="textInfo">
                <div className="rating">
                  <span
                    className="ratingIcon"
                    style={{
                      transform: `translateX(-${(5 - rating) * 15}px)`,
                    }}
                  />
                  <span className="ratingIconBackground" />
                  <span>{rating}</span>
                </div>
                <div className="reviewer">
                  <span className="userName">{userName}</span>
                  <span className="date">{date}</span>
                  <span className="option">{option}</span>
                </div>
              </div>
            </div>
            <p className="review">{review}</p>
            <FiArrowLeftCircle onClick={goToPrevPage} className="prevButton" />
            <FiArrowRightCircle onClick={goToNextPage} className="nextButton" />
          </div>
        </div>
      </div>
    );
  }
}

export default PopUp;
