import React, { Component } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { HiOutlinePlus } from 'react-icons/hi';
import { HiOutlineX } from 'react-icons/hi';
import './Info.scss';

class Info extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      optionSelected: false,
    };
  }

  handleActive = () => {
    const { isClicked } = this.state;
    this.setState({
      isClicked: !isClicked,
    });
  };

  handleOptionDisplay = () => {
    const { optionSelected } = this.state;
    const { increaseTotalItemCount } = this.props;
    if (optionSelected) {
      alert('이미 선택된 옵션입니다.');
      return;
    }

    this.setState(
      {
        optionSelected: true,
        isClicked: false,
      },
      increaseTotalItemCount
    );
  };

  deleteOption = () => {
    const { deleteTotalItemCount } = this.props;
    this.setState(
      {
        optionSelected: false,
      },
      deleteTotalItemCount
    );
  };

  render() {
    const {
      totalItemCount,
      increaseTotalItemCount,
      decreaseTotalItemCount,
    } = this.props;
    let { itemName, itemPrice, shipCost, sizeOption } = this.props.itemData;
    itemPrice = Number(itemPrice);
    shipCost = Number(shipCost);
    const { isClicked, optionSelected } = this.state;

    return (
      <div className="info">
        <h2 className="itemName">{itemName}</h2>
        <span className="itemPrice">{itemPrice.toLocaleString()}</span>
        <div className="NHBanner">
          <span>NH농협카드 간편결제 시 5% 청구할인</span>
        </div>
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
              <span className="rewardOption">포인트 더 받는 방법</span>
              <b className="reward">
                +최대 {(itemPrice * 0.08).toLocaleString()}원
              </b>
            </li>
            <li className="plusMembReward">
              <div className="rewardOption">무료 가입하고 추가 4% 적립!</div>
              <div className="reward">
                {(itemPrice * 0.04).toLocaleString()}원
              </div>
            </li>
            <li className="chargeReward">
              <div className="rewardOption">충전포인트로 결제시</div>
              <div className="reward">
                {(itemPrice * 0.02).toLocaleString()}원
              </div>
            </li>
            <li className="favReward">
              <div className="rewardOption">MY단골스토어에서 결제시</div>
              <div className="reward">
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
            className={isClicked && optionSelected ? 'isClicked' : ''}
            onClick={this.handleActive}
          >
            사이즈
          </button>
          <ul
            className={isClicked ? 'isClicked' : ''}
            onClick={this.handleOptionDisplay}
          >
            <li>{sizeOption}</li>
          </ul>
        </div>
        <div
          className={
            optionSelected ? 'itemOptionChoice selected' : 'itemOptionChoice'
          }
        >
          <div className="name">{sizeOption}</div>
          <div className="option">
            <div className="countContainer">
              <span onClick={decreaseTotalItemCount} className="decrease">
                <AiOutlineMinus />
              </span>

              <div className="count">{totalItemCount}</div>
              <span onClick={increaseTotalItemCount} className="increase">
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
