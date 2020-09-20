import React, { Component } from 'react';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { HiOutlineChevronRight } from 'react-icons/hi';
import PopUp from './PopUp/PopUp';
import './PhotoReview.scss';

class PhotoReview extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      reviewPage: 0,
      currentReview: 0,
      isActive: false,
    };
  }

  handleActiveModal = () => {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  };

  closeModal = (e) => {
    if (e.target.className === 'popUp isActive') {
      e.target.className = 'popUp';
      this.handleActiveModal();
    }
  };

  handlePopUpDisplay = () => {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  };

  handlePopUpRightButton = () => {
    let { currentReview, reviews } = this.state;
    const max = currentReview >= reviews.length - 1;

    this.setState({
      currentReview: max ? 0 : currentReview + 1,
    });
  };

  handlePopUpLeftButton = () => {
    let { currentReview, reviews } = this.state;
    const lastReview = reviews.length - 1;

    this.setState({
      currentReview: !currentReview ? lastReview : currentReview - 1,
    });
  };

  handleReviewRightButton = () => {
    let { reviewPage, reviews } = this.state;
    const max = reviewPage + 1 >= Math.ceil(reviews.length / 4);

    this.setState({
      reviewPage: max ? 0 : reviewPage + 1,
    });
  };

  handleReviewLeftButton = () => {
    let { reviewPage, reviews } = this.state;
    const lastPage = Math.ceil(reviews.length / 4) - 1;

    this.setState({
      reviewPage: !reviewPage ? lastPage : reviewPage - 1,
    });
  };

  getReviewData = () => {
    fetch('/data/reviews.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          reviews: res.reviews,
        });
      });
  };

  componentDidMount() {
    this.getReviewData();
  }

  render() {
    const { reviews, reviewPage, isActive, currentReview } = this.state;

    const moveReviewPage = {
      width: `${Math.ceil(reviews.length / 2) * 50}%`,
      transform: `translateX(-${reviewPage * 1018}px)`,
    };

    return (
      <div className="photoReview">
        <div className="head">
          <h3>
            포토 리뷰 <span>({reviews.length})</span>
          </h3>
          <div className="buttonContainer">
            <HiOutlineChevronLeft
              onClick={this.handleReviewLeftButton}
              className="arrow leftIcon"
            />
            <HiOutlineChevronRight
              onClick={this.handleReviewRightButton}
              className="arrow rightIcon"
            />
          </div>
        </div>
        <div className="reviewContainer">
          <ul className="reviewList" style={moveReviewPage}>
            {reviews.map((reviewData, index) => {
              const {
                id,
                userName,
                rating,
                review,
                date,
                photo,
                option,
              } = reviewData;
              return (
                <li key={id}>
                  <div
                    className="inner"
                    onClick={() => {
                      this.setState(
                        { currentReview: index },
                        this.handleActiveModal
                      );
                    }}
                  >
                    <div className="left">
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
                      <div className="review">{review}</div>
                    </div>
                    <div className="photo">
                      <img src={photo} alt="리뷰 이미지" />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <PopUp
            isActive={isActive}
            currentReview={currentReview}
            reviewData={reviews.length && reviews[currentReview]}
            max={reviews.length}
            goToNextPage={this.handlePopUpRightButton}
            goToPrevPage={this.handlePopUpLeftButton}
            closeModal={this.closeModal}
          />
        </div>
      </div>
    );
  }
}

export default PhotoReview;
