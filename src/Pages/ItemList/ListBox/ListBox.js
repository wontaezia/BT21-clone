import React, { Component } from 'react';
import './ListBox.scss';
import Item from './Item/Item';

class ListBox extends Component {
  render() {
    const { items, handleLike, currentViewIdx } = this.props;
    const viewOption = [
      'listItemBox',
      'itemBox',
      'bigItemBox',
      'galleryItemBox',
    ];
    const selectedViewOption = viewOption[currentViewIdx];
    return (
      <div className={`${selectedViewOption}Container`}>
        <ul className="listBox">
          {items?.map((iteminfo, index) => (
            <Item
              key={index}
              itemId={iteminfo.itemId}
              itemName={iteminfo.itemName}
              itemPrice={iteminfo.itemPrice}
              itemImage={iteminfo.itemImage}
              itemReview={iteminfo.itemReview}
              itemGrade={iteminfo.itemGrade}
              isLiked={iteminfo.isLiked}
              handleLike={handleLike}
              currentViewIdx={currentViewIdx}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ListBox;
