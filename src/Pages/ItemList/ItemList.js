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
      sort: 'recent',
      currentViewIdx: 1,
      currentPageIdx: 1,
      pageArray: [],
      num: 40,
      selectNum: 0,
      popup: false,
      offset: 1,
    };
  }

  componentDidMount() {
    this.handleFetchUntilPage();
  }

  handlefiltering = (e) => {
    const { name, className } = e.target;

    const filter = {
      popular: 0,
      accumulate: 1,
      lowPrice: 2,
      recent: 3,
      reviewVolume: 4,
      itemGrade: 5,
    };
    const index = className === 'checked' ? 6 : filter[className];
    this.setState(
      {
        sort: name,
        currentIdx: index,
      },
      () => this.handleFetcth()
    );
  };

  handleFetcth = () => {
    const { num, sort, offset } = this.state;
    fetch(
      `http://10.58.4.141:8000/products?num=${num}&page_no=${offset}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          items: res.data,
        });
      });
  };

  handleFetchUntilPage = () => {
    const { num, sort, offset } = this.state;
    fetch(
      `http://10.58.4.141:8000/products?num=${num}&page_no=${offset}&sort=${sort}`
    )
      // http://10.58.6.82:8000/product/listview
      //'http://localhost:3000/data/itemListTestData.json'
      .then((res) => res.json())
      .then((res) => {
        const newPageArray = [];
        for (var i = 1; i <= res.pageTotal; i++) {
          newPageArray.push(i);
        }
        this.setState({
          items: res.data,
          pageArray: newPageArray,
        });
      });
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

  handlePopup = () => {
    const { popup } = this.state;
    this.setState({
      popup: !popup,
    });
  };

  selectViewCount = (e) => {
    const { id } = e.target;
    this.setState({ num: id }, () => this.handleFetchUntilPage());
    this.handlePopup();
  };

  changeSelect = (e) => {
    const { id } = e.target;
    this.setState({ selectNum: id });
  };

  gotoMain = () => {
    this.props.history.push('/Main');
  };

  nextPage = (e) => {
    const { name } = e.target;
    this.setState({ offset: name, currentPageIdx: name }, () =>
      this.handleFetcth()
    );
  };

  render() {
    const {
      items,
      currentIdx,
      currentViewIdx,
      currentPageIdx,
      pageArray,
      num,
      selectNum,
      popup,
    } = this.state;
    return (
      <div className="itemListContainer">
        <div className="itemListCategory">
          <div className="categoryName">BT21</div>
          <div className="categoryLink">
            <p onClick={() => this.gotoMain()}>홈</p>
            <p></p>
          </div>
        </div>
        <Filter
          handlefiltering={this.handlefiltering}
          handleview={this.handleview}
          items={items}
          currentIdx={currentIdx}
          currentViewIdx={currentViewIdx}
          num={num}
          popup={popup}
          selectNum={selectNum}
          handlePopup={this.handlePopup}
          selectViewCount={this.selectViewCount}
          changeSelect={this.changeSelect}
        />
        <ListBox
          items={items}
          handleLike={this.handleLike}
          currentViewIdx={currentViewIdx}
        />
        <div className="paginationContainer">
          {pageArray?.map((pageNumber, index) => (
            <Pagination
              currentPageIdx={currentPageIdx}
              key={index}
              pageNumber={pageNumber}
              nextPage={this.nextPage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ItemList;
