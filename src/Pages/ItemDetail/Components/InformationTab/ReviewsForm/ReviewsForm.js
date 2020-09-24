import React, { Component } from 'react';
import './ReviewsForm.scss';

class ReviewsForm extends Component {
  state = {
    file: '',
    imagePreviewUrl: '',
    review: '',
    isActive: false,
    isClicked: false,
    grade: 5,
  };
  fileInput = React.createRef();

  resetFormOnSubmit = () => {
    setTimeout(() => {
      this.setState({
        grade: 5,
        review: '',
        imagePreviewUrl: '',
        file: '',
      });
    }, 500);
    this.handleReviewForm();
    this.fileInput.current.value = null;
  };

  handleReviewForm = () => {
    const { isClicked } = this.state;
    this.setState({
      isClicked: !isClicked,
    });
  };

  handleReviewValue = (e) => {
    const { value } = e.target;
    this.setState(
      {
        review: value,
      },
      this.handleActiveButton
    );
  };

  handleActiveButton = () => {
    const { review } = this.state;
    this.setState({
      isActive: !!review.length,
    });
  };

  onFileChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  render() {
    const { addNewReview } = this.props;
    const { grade, imagePreviewUrl, isActive, isClicked, review } = this.state;
    return (
      <div className="ReviewsForm">
        <button
          onClick={this.handleReviewForm}
          className="reviewFormHandleButton"
        >
          {isClicked ? '접기 ▲' : '리뷰쓰기 ▼'}
        </button>
        <ul
          className={
            isClicked ? 'writeReviewsForm isClicked' : 'writeReviewsForm'
          }
        >
          <li>
            <span>평점</span>
            <div className="rating">
              {RATING_ICON.map((name, index) => {
                return (
                  <span
                    key={name}
                    className={
                      index > grade - 1 ? 'ratingIcon isActive' : 'ratingIcon'
                    }
                    onClick={() => {
                      this.setState({
                        grade: index + 1,
                      });
                    }}
                  />
                );
              })}
              <span className="ratingIconBackground" />
              <span>{grade}</span>
            </div>
          </li>
          <li>
            <span>리뷰</span>
            <textarea
              onChange={this.handleReviewValue}
              placeholder="고객님의 소중한 리뷰를 남겨주세요"
              wrap="soft"
              value={review}
            />
          </li>
          <li>
            <input
              ref={this.fileInput}
              type="file"
              onChange={this.onFileChange}
              accept=".jpg"
            />
            <img
              className={
                imagePreviewUrl ? 'uploadedPhotos active' : 'uploadedPhotos'
              }
              src={imagePreviewUrl}
              alt="업로드 파일"
            />
          </li>
          <li>
            <button
              onClick={() => {
                addNewReview(review, grade, imagePreviewUrl);
                this.resetFormOnSubmit();
              }}
              className={isActive ? 'submitButton isActive' : 'submitButton'}
            >
              리뷰 남기기
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ReviewsForm;

const RATING_ICON = ['1', '2', '3', '4', '5'];
