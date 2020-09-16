import React, { Component } from 'react';
import ImageView from './Components/ImageView/ImageView';
import Info from './Components/Info/Info';
import './ItemDetail.scss';

class ItemDetail extends Component {
  constructor() {
    super();
    this.state = {
      SHARE_ICON: [],
      ITEM_DATA: {},
    };
  }

  componentDidMount() {
    this.getItemData();
    this.getShareIconData();
  }

  getShareIconData = () => {
    fetch('http://localhost:3000/data/SHARE_ICON.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          SHARE_ICON: res.SHARE_ICON,
        });
      });
  };

  getItemData = () => {
    fetch('http://localhost:3000/data/ITEM_DATA.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          ITEM_DATA: res.ITEM_DATA[0],
        });
      });
  };

  render() {
    const { SHARE_ICON, ITEM_DATA } = this.state;
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
          <ImageView ITEM_DATA={ITEM_DATA} />
          <Info ITEM_DATA={ITEM_DATA} />
        </div>
        <div className="relatedItems"></div>
      </main>
    );
  }
}

export default ItemDetail;
