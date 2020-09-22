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
      sort: 'recent', //서버요청항목
      currentViewIdx: 1,
      currentPageIdx: 1,
      pageArray: [],
      num: 40, //서버요청항목
      selectNum: 0,
      popup: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/itemListTestData.json')
      // http://10.58.6.82:8000/product/listview
      .then((res) => res.json())
      .then((res) => {
        const { num } = this.state;
        const totalPage =
          res.itemListTestData.length % num === 0
            ? res.itemListTestData.length / num
            : res.itemListTestData.length / num + 1;
        const newPageArray = [];
        for (var i = 0; i < totalPage - 1; i++) {
          newPageArray.push(i + 1);
        }
        this.setState({
          items: res.itemListTestData,
          pageArray: newPageArray,
        });
      });
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

  handlePopup = () => {
    const { popup } = this.state;
    this.setState({
      popup: !popup,
    });
  };

  selectViewCount = (e) => {
    const { id } = e.target;
    this.setState({
      num: id,
    });
    this.handlePopup();
  };

  changeSelect = (e) => {
    const { id } = e.target;
    this.setState({ selectNum: id });
  };

  gotoMain = () => {
    this.props.history.push('/Main');
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
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ItemList;
