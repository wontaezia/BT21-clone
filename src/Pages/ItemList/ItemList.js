import React, { Component } from 'react';
import Filter from './Filter/Filetr';
import ListBox from './ListBox/ListBox';

class ItemList extends Component {
  render() {
    return (
      <div className="itemListContainer">
        <div className="itemListCategory"></div>
        <Filter />
        <ListBox />
        <div className="itemLsitIndex"></div>
      </div>
    );
  }
}

export default ItemList;
