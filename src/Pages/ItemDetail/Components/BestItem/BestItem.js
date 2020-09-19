import React, { Component } from 'react';
import './BestItem.scss';

class BestItem extends Component {
  constructor() {
    super();
    this.state = {
      bestItems: [],
    };
  }

  getBestItemData = () => {
    fetch('/data/bestItems.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          bestItems: res.bestItems,
        });
      });
  };

  componentDidMount() {
    this.getBestItemData();
  }

  render() {
    const { bestItems } = this.state;
    return (
      <div className="bestItem">
        <h3>베스트 상품</h3>
        <ul className="productList">
          {bestItems.map((bestItem) => {
            const { id, name, price, image } = bestItem;
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
