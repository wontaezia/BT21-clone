import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import BestItem from './Components/BestItem/BestItem';
import DetailViewNav from './Components/DetailViewNav/DetailViewNav';
import ImageView from './Components/ImageView/ImageView';
import Info from './Components/Info/Info';
import InformationTab from './Components/InformationTab/InformationTab';
import PhotoReview from './Components/PhotoReview/PhotoReview';
import './ItemDetail.scss';
import { API } from '../../config';

class ItemDetail extends Component {
  state = {
    itemData: {},
    totalItemCount: 0,
    isSelected: false,
    optionSelected: false,
    endPoint: false,
    suggestionItems: [],
    bestItems: [],
    infoTab: null,
    imagesTab: null,
    reviewsTab: null,
    InformationOffsetTop: 0,
    infoTabOffsetTop: 0,
    imagesTabOffsetTop: 0,
    reviewsTabOffsetTop: 0,
    infoTabStatus: false,
    imagesTabStatus: false,
    reviewsTabStatus: false,
  };

  handleFixedNavDisplay = () => {
    const { InformationOffsetTop } = this.state;
    const scrollTop = window.scrollY;
    const isActive = scrollTop > InformationOffsetTop - 300;

    this.setState({
      endPoint: isActive,
    });
  };

  handleActive = () => {
    const { isSelected } = this.state;
    this.setState({
      isSelected: !isSelected,
    });
  };

  increaseTotalItemCount = () => {
    const { totalItemCount } = this.state;
    this.setState({
      totalItemCount: totalItemCount + 1,
      isSelected: false,
      optionSelected: true,
    });
  };

  decreaseTotalItemCount = () => {
    const { totalItemCount } = this.state;
    totalItemCount > 1 &&
      this.setState({
        totalItemCount: totalItemCount - 1,
      });
  };

  deleteTotalItemCount = () => {
    this.setState({
      totalItemCount: 0,
      optionSelected: false,
    });
  };

  handleOptionDisplay = () => {
    const { optionSelected } = this.state;
    if (optionSelected) {
      alert('이미 선택된 옵션입니다.');
      return;
    }
    this.increaseTotalItemCount();
  };

  getItemData = () => {
    fetch(`${API}/products/8`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          itemData: res.data,
        });
      });
  };

  getSuggestionItems = () => {
    fetch('/data/suggestionItems.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          suggestionItems: res.suggestionItems,
        });
      });
  };

  getBestItemsData = () => {
    fetch('/data/bestItems.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          bestItems: res.bestItems,
        });
      });
  };

  getInformationOffsetTop = (ref) => {
    const { offsetTop } = ref.current;
    this.setState({
      InformationOffsetTop: offsetTop,
    });
  };

  getSectionsOffsetTop = (ref) => {
    const { current } = ref;
    const offsetTop = current.offsetTop;
    const offsetKey = current.dataset.name + 'OffsetTop';
    this.setState({
      [current.dataset.name]: current,
      [offsetKey]: offsetTop,
    });
  };

  handleTabBackground = () => {
    const { imagesTabOffsetTop, reviewsTabOffsetTop } = this.state;
    const scroll = window.scrollY + 200;
    const isFocusOnInfoTab = scroll > 0 && scroll < imagesTabOffsetTop;
    const isFocusOnImagesTab =
      scroll > imagesTabOffsetTop && scroll < reviewsTabOffsetTop;
    const isFocusOnReviewsTab = scroll > reviewsTabOffsetTop;

    this.setState({
      infoTabStatus: isFocusOnInfoTab,
      imagesTabStatus: isFocusOnImagesTab,
      reviewsTabStatus: isFocusOnReviewsTab,
    });
  };

  handleScrollIntoView = (element) => {
    const offset = element.offsetTop - 70;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  handleScrollEvent = () => {
    window.addEventListener('wheel', () => {
      this.handleFixedNavDisplay();
      this.handleTabBackground();
    });
  };

  componentDidMount() {
    this.getItemData();
    this.handleScrollEvent();
    this.getBestItemsData();
    this.getSuggestionItems();
  }

  componentWillUnmount() {
    window.addEventListener('wheel', null);
  }

  render() {
    const {
      infoTab,
      imagesTab,
      reviewsTab,
      infoTabStatus,
      imagesTabStatus,
      reviewsTabStatus,
      endPoint,
      itemData,
      bestItems,
      suggestionItems,
      totalItemCount,
      isSelected,
      optionSelected,
    } = this.state;
    return (
      <>
        <main className="ItemDetail">
          <nav>
            <ul className="share">
              {SHARE_ICON.map((icon) => {
                const { name, backgroundPosition } = icon;
                return (
                  <li className={name} key={name}>
                    <button style={{ backgroundPosition }}></button>
                  </li>
                );
              })}
            </ul>
            <div className="category"></div>
          </nav>
          <div className="detailMain">
            <ImageView itemData={itemData} />
            <Info
              itemData={itemData}
              totalItemCount={totalItemCount}
              isSelected={isSelected}
              optionSelected={optionSelected}
              decreaseTotalItemCount={this.decreaseTotalItemCount}
              increaseTotalItemCount={this.increaseTotalItemCount}
              deleteTotalItemCount={this.deleteTotalItemCount}
              handleActive={this.handleActive}
              handleOptionDisplay={this.handleOptionDisplay}
            />
          </div>
          {itemData.photoReview && (
            <PhotoReview reviews={itemData.photoReview} />
          )}
          <BestItem
            title="베스트 상품"
            itemList={bestItems}
            getBestItemsOffsetTop={this.getBestItemsOffsetTop}
          />
          <DetailViewNav
            infoTab={infoTab}
            imagesTab={imagesTab}
            reviewsTab={reviewsTab}
            infoTabStatus={infoTabStatus}
            imagesTabStatus={imagesTabStatus}
            reviewsTabStatus={reviewsTabStatus}
            endPoint={endPoint}
            itemData={itemData}
            totalItemCount={totalItemCount}
            isSelected={isSelected}
            optionSelected={optionSelected}
            handleScrollIntoView={this.handleScrollIntoView}
            decreaseTotalItemCount={this.decreaseTotalItemCount}
            increaseTotalItemCount={this.increaseTotalItemCount}
            deleteTotalItemCount={this.deleteTotalItemCount}
            handleActive={this.handleActive}
            handleOptionDisplay={this.handleOptionDisplay}
            handleTabBackground={this.handleTabBackground}
          />
          <InformationTab
            itemData={itemData}
            infoTab={infoTab}
            imagesTab={imagesTab}
            reviewsTab={reviewsTab}
            getInformationOffsetTop={this.getInformationOffsetTop}
            getSectionsOffsetTop={this.getSectionsOffsetTop}
          />
          <BestItem
            title="추천 상품"
            itemList={suggestionItems}
            getBestItemsOffsetTop={this.getBestItemsOffsetTop}
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default ItemDetail;

const SHARE_ICON = [
  {
    name: 'blog',
    backgroundPosition: '-10px -127px',
  },
  {
    name: 'cafe',
    backgroundPosition: '-44px -127px',
  },
  {
    name: 'keep',
    backgroundPosition: '-49px -216px',
  },
  {
    name: 'release',
    backgroundPosition: '-114px -162px',
  },
];
