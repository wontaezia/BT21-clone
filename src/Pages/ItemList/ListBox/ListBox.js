import React, { Component } from 'react';
import './ListBox.scss';
import Item from './Item/Item';

class ListBox extends Component {
  render() {
    const { items, handleLike, currentviewidx } = this.props;
    return (
      <ul className="listBox">
        {items?.map((iteminfo, index) => (
          <Item
            key={index}
            itemid={iteminfo.itemId}
            itemName={iteminfo.itemName}
            itemPrice={iteminfo.itemPrice}
            itemImage={iteminfo.itemImage}
            itemReview={iteminfo.itemReview}
            itemGrade={iteminfo.itemGrade}
            isLiked={iteminfo.isLiked}
            handleLike={handleLike}
            currentviewidx={currentviewidx}
          />
        ))}
      </ul>
    );
  }
}

export default ListBox;
