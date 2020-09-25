import React, { Component } from 'react';
import Filter from './Filter/Filetr';
import ListBox from './ListBox/ListBox';
import Pagination from './Pagination/Pagination';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import './ItemList.scss';
import { API } from '../../config';

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

  handleFiltering = (e) => {
    const { name, className } = e.target;
    const FILTER = {
      popular: 0,
      accumulate: 1,
      lowPrice: 2,
      recent: 3,
      reviewVolume: 4,
      itemGrade: 5,
    };
    const index = className === 'checked' ? 6 : FILTER[className];
    this.setState(
      {
        sort: name,
        currentIdx: index,
      },
      () => this.handleFetch()
    );
  };

  handleFetch = () => {
    const { num, sort, offset } = this.state;
    fetch(`${API}/products?num=${num}&page_no=${offset}&sort=${sort}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          items: res.data,
        });
      });
  };

  handleFetchUntilPage = () => {
    const { num, sort, offset } = this.state;
    fetch(`${API}/products?num=${num}&page_no=${offset}&sort=${sort}`)
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

  handleView = (e) => {
    const VIEW_BUTTONS = [
      'listView',
      'imageView',
      'bigImageView',
      'galleryView',
    ];
    const { id, className } = e.target;
    const { currentViewIdx } = this.state;
    const idIndex = VIEW_BUTTONS.indexOf(id);
    const classNAmeIndex = VIEW_BUTTONS.indexOf(className);
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
    this.props.history.push('/');
  };

  nextPage = (e) => {
    const { name } = e.target;
    this.setState({ offset: name, currentPageIdx: name }, () =>
      this.handleFetch()
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
      <>
        <div className="itemListNav">
          <Nav />
        </div>
        <div className="itemListContainer">
          <div className="itemListCategory">
            <div className="categoryName">BT21</div>
            <div className="categoryLink">
              <span onClick={this.gotoMain} className="home">
                홈
              </span>
              <span className="character">캐릭터</span>
              <span className="BT21">BT21</span>
            </div>
          </div>
          <Filter
            handleFiltering={this.handleFiltering}
            handleView={this.handleView}
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
        <div className="itemListFooter">
          <Footer />
        </div>
      </>
    );
  }
}

export default ItemList;
