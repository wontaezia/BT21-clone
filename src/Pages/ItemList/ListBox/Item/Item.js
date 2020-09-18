import React, { Component } from 'react';
import './Item.scss';
import { withRouter } from 'react-router-dom';

class Item extends Component {
  gotoItemDetail = () => {
    this.props.history.push('/ItemDetail');
  };
  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  render() {
    let {
      itemImage,
      itemName,
      itemPrice,
      itemReview,
      itemGrade,
      isLiked,
    } = this.props;
    return (
      <li className="itemBox">
        <div className="clickBox">
          <div className="image">
            <img
              alt="itemimage"
              src={itemImage}
              onClick={this.gotoItemDetail}
            />
            <div className="imageButtonBox">
              <div className="likeButtonBox">
                <button
                  className={isLiked ? 'likeChecked' : 'imageInnerLike'}
                ></button>
              </div>
              <div className="viewButtonBox">
                <button className="detailView"></button>
              </div>
            </div>
          </div>
          <div className="itemName">
            <p className="name">{itemName}</p>
            <button className={isLiked ? 'smallLikeChecked' : 'like'}></button>
          </div>
          <div className="itemPrice">
            <p className="price">{this.numberWithCommas(itemPrice)}원</p>
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
        {/* <div className="soldout">
          <div>SOLDOUT</div>
    </div>*/}
      </li>
    );
  }
}

export default withRouter(Item);
