import React, { Component } from 'react';
import Filter from './Filter/Filetr';
import ListBox from './ListBox/ListBox';
import Pagination from './Pagination/Pagination';
import './ItemList.scss';

class ItemList extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      currentIdx: 3,
      currentViewIdx: 1,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/itemListTestData.json')
      // http://10.58.6.82:8000/product/listview
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          items: res.itemListTestData,
        })
      );
  }

  handlefiltering = (e) => {
    const { items } = this.state;
    const { className } = e.target;
    const filter = {
      popular: [0, 'itemReview'], //인기도순 알길이 없어서 그냥 넣음
      accumulate: [1, 'itemReview'], //마찬가지
      lowPrice: [2, 'itemPrice'],
      recent: [3, 'itemReview'], //마찬가지
      reviewVolume: [4, 'itemReview'],
      itemGrade: [5, 'itemGrade'],
    };
    const index = className === 'checked' ? 6 : filter[className][0];
    const standard = className === 'checked' ? 6 : filter[className][1];
    const c = index === 2 ? 1 : -1;
    if (index === 6 || standard === 6) {
      return;
    } else {
      this.setState({
        items: [...items].sort(function (a, b) {
          if (a[standard] > b[standard]) {
            return 1 * c;
          }
          if (a[standard] < b[standard]) {
            return -1 * c;
          }
          return 0;
        }),
        currentIdx: index,
      });
    }
  };

  handleview = (e) => {
    const viewButtons = [
      'listView',
      'imageView',
      'bigImageView',
      'galleryView',
    ];
    const { id, className } = e.target;
    const { currentViewIdx } = this.state;
    const idIndex = viewButtons.indexOf(id);
    const classNAmeIndex = viewButtons.indexOf(className);
    this.setState({
      currentViewIdx:
        idIndex > -1
          ? idIndex
          : classNAmeIndex > -1
          ? classNAmeIndex
          : currentViewIdx,
    });
  };

  handleLike = (e) => {
    const { items } = this.state;
    this.setState({
      items: items.map((iteminfo) => {
        if (iteminfo.itemName === e.target.id)
          return {
            ...iteminfo,
            isLiked: !iteminfo.isLiked,
          };
        return iteminfo;
      }),
    });
  };

  render() {
    const { items, currentIdx, currentViewIdx, selectedOption } = this.state;
    return (
      <div className="itemListContainer">
        <div className="itemListCategory"></div>
        <Filter
          handlefiltering={this.handlefiltering}
          handleview={this.handleview}
          items={items}
          currentIdx={currentIdx}
          currentViewIdx={currentViewIdx}
        />
        <ListBox
          items={items}
          handleLike={this.handleLike}
          currentViewIdx={currentViewIdx}
        />
        <Pagination />
      </div>
    );
  }
}

export default ItemList;
