import React, { Component } from 'react';
import BestItem from './Components/BestItem/BestItem';
import ImageView from './Components/ImageView/ImageView';
import Info from './Components/Info/Info';
import PhotoReview from './Components/PhotoReview/PhotoReview';
import './ItemDetail.scss';

class ItemDetail extends Component {
  constructor() {
    super();
    this.state = {
      itemData: {},
    };
  }

  componentDidMount() {
    this.getItemData();
  }

  getItemData = () => {
    fetch('/data/itemData.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          itemData: res.itemData[0],
        });
      });
  };

  render() {
    const { itemData } = this.state;
    return (
      <main className="itemDetail">
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
          <Info itemData={itemData} />
        </div>
        <PhotoReview />
        <BestItem />
      </main>
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
