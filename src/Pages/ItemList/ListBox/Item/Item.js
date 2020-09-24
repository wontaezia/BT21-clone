import React, { Component } from 'react';
import './Item.scss';
import './listItemBox.scss';
import './bigItemBox.scss';
import './galleryItemBox.scss';
import { withRouter } from 'react-router-dom';

class Item extends Component {
  gotoItemDetail = (e) => {
    console.log(e.target.className);
    const { className } = e.target;
    this.props.history.push(`/ItemDetail/${className}`);
  };

  render() {
    const {
      itemId,
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
            <img
              className={itemId}
              alt="itemimage"
              src={itemImage}
              onClick={(e) => this.gotoItemDetail(e)}
            />
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
                <button className="detailView">+</button>
              </div>
            </div>
          </div>
          <div className="itemName">
            <p
              id="name"
              className={itemId}
              onClick={(e) => this.gotoItemDetail(e)}
            >
              {itemName}
            </p>
            <label
              htmlFor={itemName}
              className={isLiked ? 'smallLikeChecked' : 'like'}
              onClick={(e) => handleLike(e)}
            ></label>
          </div>
          <div className="itemPrice">
            <p
              id="price"
              className={itemId}
              onClick={(e) => this.gotoItemDetail(e)}
            >
              {Number(itemPrice).toLocaleString()}원
            </p>
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
