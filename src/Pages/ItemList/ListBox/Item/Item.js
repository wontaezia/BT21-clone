import React, { Component } from 'react';
import './Item.scss';

class Item extends Component {
  gotoItemDetail = () => {
    this.props.history.push('/ItemDetail');
  };
  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  render() {
    const {
      itemImage,
      itemName,
      itemPrice,
      itemReview,
      itemGrade,
    } = this.props;
    return (
      <li className="itemBox">
        <div className="image">
          <a
            className="gotoItemDetail"
            onClick={this.gotoItemDetail}
            href="#none"
          >
            <img alt="itemimage" src={itemImage} />
          </a>
          <div className="imageButtonBox">
            <div className="likeButtonBox">
              <button className="imageInnerLike"></button>
            </div>
            <div className="viewButtonBox">
              <button className="detailView"></button>
            </div>
          </div>
        </div>
        <div className="itemName">
          <p className="name">{itemName}</p>
          <button className="like"></button>
        </div>
        <div className="itemPrice">
          <p className="price">{this.numberWithCommas(itemPrice)}원</p>
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

export default Item;
