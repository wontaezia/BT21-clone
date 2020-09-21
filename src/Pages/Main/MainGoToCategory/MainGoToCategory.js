import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainGoToCategory.scss';

class MainGoToCategory extends Component {
  render() {
    return (
      <div className="MainGoToCategory">
        <strong className="MainGoToCategoryTitle">카테고리 바로가기</strong>
        <div className="wrapGoToCategoryItems">
          {GoToCategoryItems.map((item) => (
            <Link to={item.endPoint}>
              <div key={item.id}>
                <ul>
                  <li>
                    <img src={item.img}></img>
                    <div className="categoryItemSpans">
                      <span className="categoryName">{item.categoryName}</span>
                      <span className="categoryTag">{item.categoryTag}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default MainGoToCategory;

const GoToCategoryItems = [
  {
    id: 1,
    img:
      'https://shop-phinf.pstatic.net/20200809_243/1596903742262s826P_JPEG/ca_sale.jpg?type=w640',
    categoryName: 'SALE',
    categoryTag: 'ㄱ',
    endPoint: '/',
  },
  {
    id: 2,
    img:
      'https://shop-phinf.pstatic.net/20200803_120/1596419614560g5PsD_JPEG/ca_bf.jpg?type=w640',
    categoryName: '브라운앤프렌즈',
    categoryTag: 'ㄱ',
    endPoint: '/',
  },
  {
    id: 3,
    img:
      'https://shop-phinf.pstatic.net/20200803_81/15964196223571iyTQ_JPEG/ca_bt21.jpg?type=w640',
    categoryName: 'BT21',
    categoryTag: 'ㄱ',
    endPoint: '/ItemList',
  },
  {
    id: 4,
    img:
      'https://shop-phinf.pstatic.net/20200803_137/1596419631273ayVVX_JPEG/ca_brawl.jpg?type=w640',
    categoryName: '브롤스타즈',
    categoryTag: 'ㄱ',
    endPoint: '/',
  },
];
