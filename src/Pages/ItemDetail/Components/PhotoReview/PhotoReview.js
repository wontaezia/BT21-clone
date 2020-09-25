import React, { Component } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import PopUp from './PopUp/PopUp';
import './PhotoReview.scss';

class PhotoReview extends Component {
  state = {
    reviewPage: 0,
    currentReview: 0,
    isActive: false,
  };

  handleActiveModal = () => {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  };

  closeModal = (e) => {
    if (e.target.className === 'PopUp isActive') {
      e.target.className = 'PopUp';
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
    const { reviews } = this.props;
    const { currentReview } = this.state;
    const max = currentReview >= reviews.length - 1;

    this.setState({
      currentReview: max ? 0 : currentReview + 1,
    });
  };

  handlePopUpLeftButton = () => {
    const { reviews } = this.props;
    const { currentReview } = this.state;
    const lastReview = reviews.length - 1;

    this.setState({
      currentReview: !currentReview ? lastReview : currentReview - 1,
    });
  };

  handleReviewRightButton = () => {
    const { reviews } = this.props;
    const { reviewPage } = this.state;
    const max = reviewPage + 1 >= Math.ceil(reviews.length / 4);

    this.setState({
      reviewPage: max ? 0 : reviewPage + 1,
    });
  };

  handleReviewLeftButton = () => {
    const { reviews } = this.props;
    const { reviewPage } = this.state;
    const lastPage = Math.ceil(reviews.length / 4) - 1;

    this.setState({
      reviewPage: !reviewPage ? lastPage : reviewPage - 1,
    });
  };

  render() {
    const { reviews } = this.props;
    const { reviewPage, isActive, currentReview } = this.state;

    const setStyleReviewPage = {
      width: `${Math.ceil(reviews?.length / 2) * 50}%`,
      transform: `translateX(-${reviewPage * 1018}px)`,
    };

    return (
      <div className="PhotoReview">
        <div className="head">
          <h3>
            리뷰 <span>({reviews?.length})</span>
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
          <ul className="reviewList" style={setStyleReviewPage}>
            {reviews?.map(
              (
                { reviewId, reviewer, grade, detail, registerDate, photo },
                index
              ) => {
                return (
                  <li key={index}>
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
                        <div className="review">{detail}</div>
                      </div>
                      <div className="photo">
                        {photo && <img src={photo} alt="리뷰 이미지" />}
                      </div>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
          <PopUp
            isActive={isActive}
            currentReview={currentReview}
            reviews={reviews[currentReview]}
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
