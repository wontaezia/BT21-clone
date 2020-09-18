import React, { Component } from 'react';
import './ListBox.scss';
import Item from './Item/Item';

class ListBox extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul className="listBox">
        {items ? (
          items.map((iteminfo, index) => (
            <Item
              key={index}
              itemName={iteminfo.itemName}
              itemPrice={iteminfo.itemPrice}
              itemImage={iteminfo.itemImage}
              itemReview={iteminfo.itemReview}
              itemGrade={iteminfo.itemGrade}
              isLiked={iteminfo.isLiked}
            />
          ))
        ) : (
          <p className="noResult">검색 결과가 없습니다.</p>
        )}
      </ul>
    );
  }
}

export default ListBox;
