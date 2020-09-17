import React, { Component } from 'react';
import './ListBox.scss';
import Item from './Item/Item';

class ListBox extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul className="listBox">
        {items !== [] ? (
          items.map((iteminfo, index) => (
            <Item
              key={index} //컴포넌트 자체에 키값을 준다!!!sort로 정렬시키고 나면 인덱스로 밖에 키값을 줄 수없을 것같아요. 다른 좋은 방법이 있을까욧?
              itemName={iteminfo.itemName}
              itemPrice={iteminfo.itemPrice}
              itemImage={iteminfo.itemImage}
              itemReview={iteminfo.itemReview}
              itemGrade={iteminfo.itemGrade}
              isliked={iteminfo.isLiked}
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
