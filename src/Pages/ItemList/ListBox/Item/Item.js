import React, { Component } from 'react';
import './Item.scss';
import './listItemBox.scss';
import { withRouter } from 'react-router-dom';

class Item extends Component {
  gotoItemDetail = (itemId) => {
    this.props.history.push(`/ItemDetail/${itemId}`);
  };

  render() {
    const {
      itemImage,
      itemName,
      itemPrice,
      itemReview,
      itemGrade,
      isLiked,
      handleLike,
      currentViewIdx,
    } = this.props;
    const viewOption = [
      'listItemBox',
      'itemBox',
      'bigItemBox',
      'galleryItemBox',
    ];
    const selectedViewOption = viewOption[currentViewIdx];
    return (
      <li className={selectedViewOption}>
        <div className="clickBox">
          <div className="image">
            <img alt="itemimage" src={itemImage} />
            <div className="imageButtonBox">
              <label
                htmlFor={itemName}
                className={isLiked ? 'likeCheckedButtonBox' : 'likeButtonBox'}
              >
                <button
                  id={itemName}
                  className={isLiked ? 'likeChecked' : 'imageInnerLike'}
                  onClick={(e) => handleLike(e)}
                ></button>
              </label>
              <div className="viewButtonBox">
                <button className="detailView"></button>
              </div>
            </div>
          </div>
          <div className="itemName">
            <p className="name">{itemName}</p>
            <label
              htmlFor={itemName}
              className={isLiked ? 'smallLikeChecked' : 'like'}
              onClick={(e) => handleLike(e)}
            ></label>
          </div>
          <div className="itemPrice">
            <p className="price">{Number(itemPrice).toLocaleString()}원</p>
          </div>
        </div>
        <div className="reviewGrade">
          <span className="review">리뷰</span>
          <span className="value">{Number(itemReview)}</span>
          <span className="grade">평점</span>
          <span className="value">{parseFloat(itemGrade).toFixed(1)}</span>
          <span className="slash">/</span>
          <span className="value">5</span>
        </div>
      </li>
    );
  }
}

export default withRouter(Item);
