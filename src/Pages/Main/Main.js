import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Main.scss';
import MainBottomBanner from './MainBottomBanner/MainBottomBanner';
import MainLookAround from './MainLookAround/MainLookAround';

class Main extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      className: 'slide',
    };
    return (
      <div className="Main">
        <div className="mainSlideshowContainer">
          <Slider {...settings}>
            <div>
              <img
                alt="mainSlideBanner1"
                src="https://shop-phinf.pstatic.net/20200902_265/1599009589348S9Lw1_JPEG/main_bn_pc_G.jpg"
              />
              {/* <p className="aa">BT21 유니버스 인형</p> */}
            </div>
            <div>
              <img
                alt="mainSlideBanner2"
                src="https://shop-phinf.pstatic.net/20200824_82/1598230934853tKWGj_JPEG/main_bn_pc_02_28129.jpg"
              />
            </div>
            <div>
              <img
                alt="mainSlideBanner3"
                src="https://shop-phinf.pstatic.net/20200824_158/1598261047755is5jE_JPEG/main_bg_pc.jpg"
              />
            </div>
            <div>
              <img
                alt="mainSlideBanner4"
                src="https://shop-phinf.pstatic.net/20200820_274/1597887710464Imups_JPEG/main_bn_pc_G_28129.jpg"
              />
            </div>
            <div>
              <img
                alt="mainSlideBanner5"
                src="https://shop-phinf.pstatic.net/20200819_109/1597801445734iCquF_JPEG/main_bn_pc_G.jpg"
              />
            </div>
            <div>
              <img
                alt="mainSlideBanner6"
                src="https://shop-phinf.pstatic.net/20200813_223/1597283242806xorcG_JPEG/main_bn_pc_G.jpg"
              />
            </div>
            <div>
              <img
                alt="mainSlideBanner7"
                src="https://shop-phinf.pstatic.net/20200814_123/1597366489174NWIzB_JPEG/main_bn_pc_G_28129.jpg"
              />
            </div>
            <div>
              <img
                alt="mainSlideBanner8"
                src="https://shop-phinf.pstatic.net/20200810_192/1597020765031Sw60l_JPEG/main_bn_pc_02.jpg"
              />
            </div>
          </Slider>
        </div>
        <MainLookAround />
        <MainBottomBanner />
      </div>
    );
  }
}

export default Main;
