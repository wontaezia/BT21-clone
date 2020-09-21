import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from '../../Components/Footer/Footer';
import BestItem from './Components/BestItem/BestItem';
import DetailViewNav from './Components/DetailViewNav/DetailViewNav';
import ImageView from './Components/ImageView/ImageView';
import Info from './Components/Info/Info';
import InformationTab from './Components/InformationTab/InformationTab';
import PhotoReview from './Components/PhotoReview/PhotoReview';
import './ItemDetail.scss';

class ItemDetail extends Component {
  constructor() {
    super();
    this.state = {
      itemData: {},
      totalItemCount: 0,
      isSelected: false,
      optionSelected: false,
      endPoint: false,
      suggestionItems: [],
      bestItems: [],
    };
    this.bestItemsList = React.createRef();
  }

  handleFixedNavDisplay = () => {
    const { current } = this.bestItemsList;
    const bestItemsListOffsetTop = ReactDOM.findDOMNode(current).offsetTop;
    const scrollTop = window.pageYOffset;
    const isActive = scrollTop > bestItemsListOffsetTop;

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
    // const { productId } = this.props.match.params;
    // fetch(`http://10.58.4.213:8000/product/detailview/${productId}`)
    // .then((res) => res.json())
    // .then((res) => {
    //   this.setState({
    //   itemData: res.data,
    //   });
    // });
    fetch(`http://10.58.6.82:8000/product/detailview/8`)
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

  getBestItemData = () => {
    fetch('/data/bestItems.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          bestItems: res.bestItems,
        });
      });
  };

  handleScrollEvent = () => {
    window.addEventListener('wheel', this.handleFixedNavDisplay);
  };

  componentDidMount() {
    this.getItemData();
    this.handleScrollEvent();
    this.getBestItemData();
    this.getSuggestionItems();
  }

  render() {
    const {
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
            ref={this.bestItemsList}
            title="베스트 상품"
            itemList={bestItems}
          />
          <DetailViewNav
            endPoint={endPoint}
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
          <InformationTab itemData={itemData} />
          <BestItem title="추천 상품" itemList={suggestionItems} />
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
