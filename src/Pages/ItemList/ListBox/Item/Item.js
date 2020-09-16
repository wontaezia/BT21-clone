import React, { Component } from 'react';
import './Item.scss';

class Item extends Component {
  /* gotoItemDetail(e) {
        e.preventDefault();
        fetch('', {
          method: 'POST',
          body: JSON.stringify({
            email: this.state.id,
            password: this.state.password,
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.Authorization) {
              localStorage.setItem('token', result.Authorization);
              this.props.history.push('/itemdetail');

               src={`https://robohash.org/${this.props.id}?set=set2&size=180x180`}
            }
          });
      }*/

  render() {
    return (
      <li className="itemBox" key={this.props.id}>
        <div className="image">
          <a className="gotoItemDetail" onClick={this.gotoItemDetail}>
            <img alt="itemimage" src={this.props.itemImage} />
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
          <p className="name">{this.props.itemName}</p>
          <button className="like"></button>
        </div>
        <div className="itemPrice">
          <p className="price">{this.props.itemPrice}원</p> {/*데이터형식*/}
        </div>
        <div className="reviewGrade">
          <span className="review">리뷰</span>
          <span className="value">{this.props.itemReview}</span>
          <span className="grade">평점</span>
          <span className="value">{this.props.itemGrade}</span>
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
