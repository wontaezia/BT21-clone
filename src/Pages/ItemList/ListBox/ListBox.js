import React, { Component } from 'react';
import './ListBox.scss';
import Item from './Item/Item';

class ListBox extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/itemListTestData.json')
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          list: res.itemListTestData,
        })
      );
  }

  render() {
    return (
      <ul className="listBox">
        {this.state.list !== [] ? (
          this.state.list.map((iteminfo) => (
            <Item
              id={iteminfo.id}
              itemName={iteminfo.itemName}
              itemPrice={iteminfo.itemPrice}
              itemImage={iteminfo.itemImage}
              itemReview={iteminfo.itemReview}
              itemGrade={iteminfo.itemGrade}
              isliked={iteminfo.isLiked}
            />
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </ul>
    );
  }
}

export default ListBox;
