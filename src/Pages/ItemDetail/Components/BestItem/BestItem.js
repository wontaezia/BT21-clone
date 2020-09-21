import React, { Component } from 'react';
import './BestItem.scss';

class BestItem extends Component {
  render() {
    const { itemList, title } = this.props;
    return (
      <div className="BestItem">
        <h3>{title}</h3>
        <ul className="productList">
          {itemList?.map((item) => {
            const { id, name, price, image } = item;
            return (
              <li key={id}>
                <div className="productImage">
                  <img src={image} alt="베스트 상품" />
                </div>
                <span className="productName">{name}</span>
                <span className="productPrice">{price.toLocaleString()}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BestItem;
