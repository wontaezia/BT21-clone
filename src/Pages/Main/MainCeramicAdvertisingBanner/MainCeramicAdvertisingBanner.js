import React, { Component } from 'react';
import './MainCeramicAdvertisingBanner.scss';

class MainCeramicAdvertisingBanner extends Component {
  constructor() {
    super();
    this.state = {
      buttonOnImage: 'buttonOnImage',
      current: 1,
      borderNumber: 1,
    };
  }

  viewInfo = (index) => {
    this.setState({
      borderNumber: index + 1,
    });
  };

  render() {
    const { buttonOnImage, borderNumber } = this.state;
    return (
      <div className="MainCeramicAdvertisingBanner">
        <div className="bannerTitle">
          <strong className="title"># 도자기속 사랑스러움</strong>
        </div>
        <div className="wrapContent">
          <div className="wrapPicture">
            <img
              className="mainPicture"
              src="https://shop-phinf.pstatic.net/20200623_43/1592886184295uGTdC_PNG/30247726864450234_1100508093.png?type=f640"
            />
            {CeramicAdvertisingItems.map((item, index) => (
              <div key={item.id}>
                <ul>
                  <div
                    className={
                      borderNumber - 1 === index
                        ? `buttonOnImage ${item.productName} active`
                        : `buttonOnImage ${item.productName}`
                    }
                    onClick={() => this.viewInfo(index)}
                  />
                  <div
                    className={
                      borderNumber - 1 === index
                        ? `wrapPricePannel ${item.productName}Pannel`
                        : `wrapPricePannel ${item.productName}Pannel pannelNotActive`
                    }
                  >
                    <div className="pricePannelLeft" />
                    <div className="pricePannel">
                      <span>{item.price}</span>
                    </div>
                    <div className="pricePannelRight" />
                  </div>
                </ul>
              </div>
            ))}
          </div>
          <div className="wrapContent">
            <div className="contentTitle">광주요 | 브라운앤프렌즈</div>
            <p>단아한 청색으로 브라운과 샐리가 새겨진 특별한 에디션</p>
            <div className="wrapContentPictures">
              {CeramicAdvertisingItems.map((item, index) => (
                <div key={item.id}>
                  <li>
                    <img
                      className={
                        this.state.borderNumber - 1 === index
                          ? 'contentPictures borderColor'
                          : 'contentPictures'
                      }
                      src={item.img}
                    />
                  </li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainCeramicAdvertisingBanner;

const CeramicAdvertisingItems = [
  {
    id: 1,
    productName: 'cup',
    img:
      'https://shop-phinf.pstatic.net/20200617_217/1592384289145atmoX_JPEG/17245418_46746721.jpg?type=f120_120',
    price: '29,000',
  },
  {
    id: 2,
    productName: 'ChopstickRest',
    img:
      'https://shop-phinf.pstatic.net/20200617_284/1592384305944raPdS_JPEG/17246411_46746849.jpg?type=f120_120',
    price: '20,000',
  },
  {
    id: 3,
    productName: 'bowlSet',
    img:
      'https://shop-phinf.pstatic.net/20200617_244/1592384301301a733A_JPEG/17246448_46746842.jpg?type=f120_120',
    price: '61,000',
  },
  {
    id: 4,
    productName: 'tray',
    img:
      'https://shop-phinf.pstatic.net/20200617_135/15923842931736e4ec_JPEG/17245619_46746728.jpg?type=f120_120',
    price: '39,000',
  },
  {
    id: 5,
    productName: 'plate',
    img:
      'https://shop-phinf.pstatic.net/20200617_221/1592384285082hrT7a_JPEG/17245100_46746714.jpg?type=f120_120',
    price: '29,000',
  },
];
