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
      currentidx: 3,
      currentviewidx: 1,
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
        currentidx: index,
      });
    }
  };

  handleview = (e) => {
    const viewbutton = ['listView', 'imageView', 'bigImageView', 'galleryView'];
    const { id, className } = e.target;
    if (viewbutton.indexOf(id) !== -1) {
      this.setState({ currentviewidx: viewbutton.indexOf(id) });
    } else if (viewbutton.indexOf(className) !== -1) {
      this.setState({ currentviewidx: viewbutton.indexOf(className) });
    }
  };

  handleLike = (e) => {
    const { items } = this.state;
    this.setState({
      items: [
        ...items.map((iteminfo) => {
          if (iteminfo.itemName === e.target.id)
            return {
              ...iteminfo,
              isLiked: !iteminfo.isLiked,
            };
          return iteminfo;
        }),
      ],
    });
  };

  render() {
    const { items, currentidx, currentviewidx, selectedOption } = this.state;
    return (
      <div className="itemListContainer">
        <div className="itemListCategory"></div>
        <Filter
          handlefiltering={this.handlefiltering}
          handleview={this.handleview}
          items={items}
          currentidx={currentidx}
          currentviewidx={currentviewidx}
        />
        <ListBox
          items={items}
          handleLike={this.handleLike}
          currentviewidx={currentviewidx}
        />
        <Pagination />
      </div>
    );
  }
}

export default ItemList;
