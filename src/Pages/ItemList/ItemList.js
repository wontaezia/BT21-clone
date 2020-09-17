import React, { Component } from 'react';
import Filter from './Filter/Filetr';
import ListBox from './ListBox/ListBox';
import './ItemList.scss';

class ItemList extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/itemListTestData.json')
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          items: res.itemListTestData,
        })
      );
  }
  handlefiltering = (e) => {
    const { items } = this.state;
    if (e.target.id === 'lowPrice') {
      this.setState({
        items: items.sort(function (a, b) {
          if (Number(a.itemPrice) > Number(b.itemPrice)) {
            return 1;
          }
          if (Number(a.itemPrice) < Number(b.itemPrice)) {
            return -1;
          }
          return 0;
        }),
      });
    } else if (e.target.id === 'reviewVolume') {
      this.setState({
        items: items.sort(function (a, b) {
          if (Number(a.itemReview) < Number(b.itemReview)) {
            return 1;
          }
          if (Number(a.itemReview) > Number(b.itemReview)) {
            return -1;
          }
          return 0;
        }),
      });
    } else if (e.target.id === 'highGrade') {
      console.log('a');
      this.setState({
        items: items.sort(function (a, b) {
          if (Number(a.itemGrade) < Number(b.itemGrade)) {
            return 1;
          }
          if (Number(a.itemGrade) > Number(b.itemGrade)) {
            return -1;
          }
          return 0;
        }),
      });
    }
  };

  render() {
    const { items } = this.state;
    return (
      <div className="itemListContainer">
        <div className="itemListCategory"></div>
        <Filter handlefiltering={this.handlefiltering} />
        <ListBox items={items} />
      </div>
    );
  }
}

export default ItemList;
