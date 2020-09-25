import React, { Component } from 'react';
import './Reviews.scss';

class Reviews extends Component {
  state = {
    current: -1,
  };

  render() {
    const { reviews } = this.props;
    const { current } = this.state;
    return (
      <div className="Reviews">
        <ul className="reviewContainer">
          {reviews?.map(
            (
              { reviewId, reviewer, grade, detail, registerDate, photo },
              index
            ) => {
              return (
                <li key={index}>
                  <div
                    className={current === index ? 'inner isActive' : 'inner'}
                    onClick={() => {
                      this.setState({
                        current: current !== index && index,
                      });
                    }}
                  >
                    <div className="userInfo">
                      <div className="userImage">
                        <img
                          src="https://profile-phinf.pstatic.net/404/default.png?type=f80_80"
                          alt="default user"
                        />
                      </div>
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
      </div>
    );
  }
}

export default Reviews;
