import React, { Component } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { HiOutlinePlus } from 'react-icons/hi';
import { HiOutlineX } from 'react-icons/hi';
import './DetailViewNav.scss';

class DetailViewNav extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  handleMenuDisplay = () => {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  };

  render() {
    const { isActive } = this.state;
    const {
      endPoint,
      totalItemCount,
      isSelected,
      optionSelected,
      increaseTotalItemCount,
      decreaseTotalItemCount,
      deleteTotalItemCount,
      handleActive,
      handleOptionDisplay,
    } = this.props;
    const { itemName, itemPrice, thumbnail } = this.props.itemData;

    return (
      <nav className={endPoint ? 'DetailViewNav isActive' : 'DetailViewNav'}>
        <div className="menuTop">
          <div className="inner">
            <div className="product">
              <div className="productPhoto">
                <img src={thumbnail?.[0]} alt="상품 이미지" />
              </div>
              <div className="productInfo">
                <span className="productName">{itemName}</span>
                <span className="productPrice">
                  {itemPrice?.toLocaleString()}원
                </span>
              </div>
            </div>
            <button
              onClick={this.handleMenuDisplay}
              className={isActive ? 'closeButton' : 'buyButton'}
            />
          </div>
          <div className={isActive ? 'menuBottom isActive' : 'menuBottom'}>
            <div className="ship">
              <div className="inner">
                <div className="shipCost">
                  <span className="method">택배배송</span>
                  <span className="cost">3,000원</span>
                </div>
                <span className="shipCostNumb">30,000원 이상 구매 시 무료</span>
                <span className="shipDiscountItemList">
                  배송비 절약상품 보기
                </span>
              </div>
            </div>
            <div className="itemOption">
              <div className="inner">
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
            </div>
            <div className="right">
              <div className="inner">
                <div
                  className={
                    optionSelected
                      ? 'itemOptionChoice selected'
                      : 'itemOptionChoice'
                  }
                >
                  <div className="name">단품</div>
                  <div className="option">
                    <div className="countContainer">
                      <span
                        onClick={decreaseTotalItemCount}
                        className="decrease"
                      >
                        <AiOutlineMinus />
                      </span>

                      <div className="count">{totalItemCount}</div>
                      <span
                        onClick={increaseTotalItemCount}
                        className="increase"
                      >
                        <HiOutlinePlus />
                      </span>
                    </div>
                    <div className="right">
                      <span className="price">
                        {(totalItemCount * itemPrice).toLocaleString()}원
                      </span>
                      <span
                        onClick={deleteTotalItemCount}
                        className="deleteButton"
                      >
                        <HiOutlineX />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="totalItem">
                  <div className="totalItemCount">
                    총 수량 {totalItemCount}개
                  </div>
                  <div className="bottom">
                    <span className="totalItemPrice">총 상품 금액</span>
                    <div className="orderPrice">
                      {(totalItemCount * itemPrice).toLocaleString()}
                      <span>원</span>
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
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default DetailViewNav;
