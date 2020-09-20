import React, { Component } from 'react';
import './MainLookAround.scss';

class MainLookAround extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
      current: -1,
    };
  }

  mouseEnter = (index) => {
    this.setState({
      isHovered: true,
      current: index,
    });
  };

  mouseout = () => {
    this.setState({
      isHovered: false,
      current: -1,
    });
  };

  render() {
    return (
      <div className="MainLookAround">
        <div className="wrapMainLookAroundTitle">
          <strong className="MainLookAroundTitle">마음껏 둘러보세요</strong>
        </div>
        <div className="wrapLookAroundItem">
          <div className="LookAroundItem">
            {LookAroundItems.map((item, index) => (
              <div key={item.id}>
                <div className="wrapLookAroundImg"></div>
                <img
                  src={item.img}
                  onMouseEnter={() => this.mouseEnter(index)}
                  onMouseOut={this.mouseout}
                ></img>
                <div
                  className={
                    this.state.current === index
                      ? 'LookAroundItemImageButtonContainer isActive'
                      : 'LookAroundItemImageButtonContainer'
                  }
                  onMouseEnter={() => this.mouseEnter(index)}
                >
                  <div className="wrapLookAroundItemImageWishButton">
                    <button className="LookAroundItemImageWishButton"></button>
                  </div>
                  <div className="wrapLookAroundItemImageDetailButton">
                    <button className="LookAroundItemImageDetailButton"></button>
                  </div>
                </div>
                <div className="LookAroundItemTextContainer">
                  <div>
                    <span className="price">{item.price}</span>
                    <span className="won">{item.won}</span>
                  </div>
                  <strong className="productName">{item.productName}</strong>
                </div>
                <div className="LookAroundItemReviewContainer">
                  <span className="grade">{item.grade}</span>
                  <span className="review">{item.review}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MainLookAround;

const LookAroundItems = [
  {
    id: 1,
    img:
      'https://shop-phinf.pstatic.net/20200803_149/1596418741701njQJC_JPEG/17592416_48852849.jpg?type=f750_974',
    price: '24,000',
    won: '원',
    productName: '라인프렌즈 BT21 CHIMMY BABY 라이팅 스탠딩 인형',
    grade: '평점 4.9',
    review: '리뷰 123',
  },
  {
    id: 2,
    img:
      'https://shop-phinf.pstatic.net/20200803_231/1596418765138a43nP_JPEG/17592791_48852924.jpg?type=f750_974',
    price: '24,000',
    won: '원',
    productName: '라인프렌즈 BT21 KOYA BABY 라이팅 스탠딩 인형',
    grade: '평점 4.7',
    review: '리뷰 16',
  },
  {
    id: 3,
    img:
      'https://shop-phinf.pstatic.net/20191118_233/1574042216938FvMX7_JPEG/11405605479374133_1186788324.jpg?type=f750_974',
    price: '29,000',
    won: '원',
    productName: '라인프렌즈 브라운 미니 가습기',
    grade: '평점 4.7',
    review: '리뷰 94',
  },
  {
    id: 4,
    img:
      'https://shop-phinf.pstatic.net/20191118_52/1574042206548divEW_JPEG/11402040919335431_12503670.jpg?type=f750_974',
    price: '29,000',
    won: '원',
    productName: '라인프렌즈 샐리 미니 가습기',
    grade: '평점 4.7',
    review: '리뷰 62',
  },
  {
    id: 5,
    img:
      'https://shop-phinf.pstatic.net/20200407_245/15862445330428wwKF_JPEG/16635728_43396279.jpg?type=f750_974',
    price: '49,000',
    won: '원',
    productName: '브롤스타즈 화이트 레터링 페이스 그래이 스웻 셔츠',
    grade: '평점 4.7',
    review: '리뷰 3',
  },
  {
    id: 6,
    img:
      'https://shop-phinf.pstatic.net/20200409_141/1586396936895TjUrv_JPEG/16349146_43473290.jpg?type=f750_974',
    price: '49,000',
    won: '원',
    productName: '라인프렌즈 브롤스타즈 페이스 컬러 블랙 스웻 셔츠 (타입2)',
    grade: '평점 5.0',
    review: '리뷰 2',
  },
  {
    id: 7,
    img:
      'https://shop-phinf.pstatic.net/20200220_56/15821903603312srjx_JPEG/19551902948695627_1753287244.jpg?type=f750_974',
    price: '19,000',
    won: '원',
    productName: '라인프렌즈 BT21 TATA 부클 슬리퍼',
    grade: '평점 4.8',
    review: '리뷰 65',
  },
  {
    id: 8,
    img:
      'https://shop-phinf.pstatic.net/20200220_35/1582190347460gJBwI_JPEG/19551890077836994_1609374860.jpg?type=f750_974',
    price: '19,000',
    won: '원',
    productName: '라인프렌즈 BT21 CHIMMY 부클 슬리퍼',
    grade: '평점 4.7',
    review: '리뷰 52',
  },
];
