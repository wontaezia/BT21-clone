import React, { Component } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { HiOutlinePlus } from 'react-icons/hi';
import { HiOutlineX } from 'react-icons/hi';
import './Info.scss';

class Info extends Component {
  constructor() {
    super();
    this.state = {
      totalItemCount: 0,
      isActive: false,
      isClicked: false,
    };
  }

  handleActive = () => {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  };

  handleOption = () => {
    const { isClicked, totalItemCount } = this.state;
    if (!isClicked) {
      this.setState({
        isClicked: true,
        isActive: false,
        totalItemCount: totalItemCount + 1,
      });
    } else {
      alert('이미 선택된 옵션입니다.');
    }
  };

  increaseTotalCount = () => {
    const { totalItemCount } = this.state;
    this.setState({
      totalItemCount: totalItemCount + 1,
    });
  };

  decreaseTotalCount = () => {
    const { totalItemCount } = this.state;
    totalItemCount > 1 &&
      this.setState({
        totalItemCount: totalItemCount - 1,
      });
  };

  deleteOption = () => {
    this.setState({
      isClicked: false,
      totalItemCount: 0,
    });
  };

  render() {
    let { itemName, itemPrice, shipCost, size } = this.props.ITEM_DATA;
    itemPrice = Number(itemPrice);
    shipCost = Number(shipCost);
    const { totalItemCount, isActive, isClicked } = this.state;

    return (
      <div className="info">
        <h2 className="itemName">{itemName}</h2>
        <span className="itemPrice">{itemPrice.toLocaleString()}</span>
        <div className="promotion">
          <h3>라인프렌즈 고객을 위한 혜택</h3>
          <div className="basicReward">
            <span>기본 적립 포인트</span>
            <b>
              {itemPrice * 0.01}
              <span>원</span>
            </b>
          </div>
          <ul className="tipRewardContainer">
            <li className="tipReward">
              <span className="left">포인트 더 받는 방법</span>
              <b className="right">
                +최대 {(itemPrice * 0.08).toLocaleString()}원
              </b>
            </li>
            <li className="plusMembReward">
              <div className="left">무료 가입하고 추가 4% 적립!</div>
              <div className="right">
                {(itemPrice * 0.04).toLocaleString()}원
              </div>
            </li>
            <li className="chargeReward">
              <div className="left">충전포인트로 결제시</div>
              <div className="right">
                {(itemPrice * 0.02).toLocaleString()}원
              </div>
            </li>
            <li className="favReward">
              <div className="left">MY단골스토어에서 결제시</div>
              <div className="right">
                {(itemPrice * 0.02).toLocaleString()}원
              </div>
            </li>
          </ul>
        </div>
        <button className="rewardBanner">
          <span>네이버플러스 멤버십 네이버페이 포인트 최대</span>
        </button>
        <div className="zeroInterest">
          <span>무이자할부</span>
          <span>카드 자세히보기</span>
          <button>?</button>
        </div>
        <div className="ship">
          <div className="shipCost">
            <span className="method">택배배송</span>
            <span className="cost">{shipCost.toLocaleString()}원</span>
          </div>
          <div className="shipCostNum">30,000원 이상 구매 시 무료</div>
          <button className="shipDiscountItemList">배송비 절약상품 보기</button>
        </div>
        <div className="itemOption">
          <button
            className={isActive && isClicked ? 'isActive' : ''}
            onClick={this.handleActive}
          >
            사이즈
          </button>
          <ul
            className={isActive ? 'isActive' : ''}
            onClick={this.handleOption}
          >
            <li>{size}</li>
          </ul>
        </div>
        <div
          className={
            isClicked ? 'itemOptionChoice isClicked' : 'itemOptionChoice'
          }
        >
          <div className="name">{size}</div>
          <div className="option">
            <div className="countContainer">
              <span onClick={this.decreaseTotalCount} className="decrease">
                <AiOutlineMinus />
              </span>

              <div className="count">{totalItemCount}</div>
              <span onClick={this.increaseTotalCount} className="increase">
                <HiOutlinePlus />
              </span>
            </div>
            <div className="right">
              <span className="price">
                {(totalItemCount * itemPrice).toLocaleString()}원
              </span>
              <span onClick={this.deleteOption} className="deleteButton">
                <HiOutlineX />
              </span>
            </div>
          </div>
        </div>
        <div className="totalItem">
          <span className="left totalItemPrice">총 상품 금액</span>
          <div className="right">
            <div className="totalItemCount">총 수량 {totalItemCount}개</div>
            <div className="orderPrice">
              {(totalItemCount * itemPrice).toLocaleString()}원
            </div>
          </div>
        </div>
        <div className="buttonContainer">
          <div className="top">
            <button className="buyButton" />
            <button className="askButton" />
          </div>
          <div className="bottom">
            <button className="addBasketButton" />
            <button className="myFavButton" />
          </div>
        </div>
        <div className="safetyTipInfo">
          <span>쇼핑할 때 필독</span>
          <button>안전거래 TIP &gt;</button>
        </div>
      </div>
    );
  }
}

export default Info;
