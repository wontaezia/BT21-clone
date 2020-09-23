import React, { Component } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { HiOutlinePlus, HiOutlineX } from 'react-icons/hi';
import './Info.scss';

class Info extends Component {
  render() {
    const {
      totalItemCount,
      isSelected,
      optionSelected,
      increaseTotalItemCount,
      decreaseTotalItemCount,
      deleteTotalItemCount,
      handleActive,
      handleOptionDisplay,
    } = this.props;
    const { itemName, itemPrice } = this.props.itemData;

    return (
      <div className="Info">
        <h2 className="itemName">{itemName}</h2>
        <span className="itemPrice">{itemPrice?.toLocaleString()}</span>
        <div className="NHBanner">
          <span>NH농협카드 간편결제 시 5% 청구할인</span>
        </div>
        <div className="promotion">
          <h3>라인프렌즈 고객을 위한 혜택</h3>
          <div className="basicReward">
            <span>기본 적립 포인트</span>
            <b>
              {Math.floor(itemPrice * 0.001) * 10}
              <span>원</span>
            </b>
          </div>
          <ul className="tipRewardContainer">
            <li className="tipReward">
              <span className="rewardOption">포인트 더 받는 방법</span>
              <b className="reward">
                +최대 {(Math.floor(itemPrice * 0.008) * 10).toLocaleString()}원
              </b>
            </li>
            <li className="plusMembReward">
              <div className="rewardOption">무료 가입하고 추가 4% 적립!</div>
              <div className="reward">
                {(Math.floor(itemPrice * 0.004) * 10).toLocaleString()}원
              </div>
            </li>
            <li className="chargeReward">
              <div className="rewardOption">충전포인트로 결제시</div>
              <div className="reward">
                {Math.floor(itemPrice * 0.002) * 10}원
              </div>
            </li>
            <li className="favReward">
              <div className="rewardOption">MY단골스토어에서 결제시</div>
              <div className="reward">
                {Math.floor(itemPrice * 0.002) * 10}원
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
            <span className="cost">3,000원</span>
          </div>
          <div className="shipCostNum">30,000원 이상 구매 시 무료</div>
          <button className="shipDiscountItemList">배송비 절약상품 보기</button>
        </div>
        <div className="itemOption">
          <button
            className={isSelected && optionSelected ? 'isClicked' : ''}
            onClick={handleActive}
          >
            사이즈
          </button>
          <ul
            className={isSelected ? 'isClicked' : ''}
            onClick={handleOptionDisplay}
          >
            <li>단품</li>
          </ul>
        </div>
        <div
          className={
            optionSelected ? 'itemOptionChoice selected' : 'itemOptionChoice'
          }
        >
          <div className="name">단품</div>
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
              <span onClick={deleteTotalItemCount} className="deleteButton">
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
