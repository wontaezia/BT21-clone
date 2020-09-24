import React, { Component } from 'react';
import Slider from 'react-slick';
import MainBottomBanner from './MainBottomBanner/MainBottomBanner';
import MainLookAround from './MainLookAround/MainLookAround';
import MainAdvertisingBanner from './MainAdvertisingBanner/MainAdvertisingBanner';
import MainCeramicAdvertisingBanner from './MainCeramicAdvertisingBanner/MainCeramicAdvertisingBanner';
import MainGoToCategory from './MainGoToCategory/MainGoToCategory';
import MainRealReview from './MainRealReview/MainRealReview';
import './Main.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Main extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

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
            <div className="firstSlide">
              <img
                alt="mainSlideBanner1"
                src="https://shop-phinf.pstatic.net/20200902_265/1599009589348S9Lw1_JPEG/main_bn_pc_G.jpg"
              />
              <p className="title">
                BT21
                <br /> 유니버스 인형
              </p>
              <p className="subTitle">MANG 에디션</p>
            </div>
            <div className="secondSlide">
              <img
                alt="mainSlideBanner2"
                src="https://shop-phinf.pstatic.net/20200824_82/1598230934853tKWGj_JPEG/main_bn_pc_02_28129.jpg"
              />
              <p className="title">
                귀여움을 <br />
                쭈압쭈압
              </p>
              <p className="subTitle">BT21 BABY 버블티 인형</p>
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
              <p className="title">이런 게 바로 겉귀속귀</p>
              <p className="subTitle">브라운앤프렌즈 2IN1 쿠션</p>
            </div>
            <div>
              <img
                alt="mainSlideBanner5"
                src="https://shop-phinf.pstatic.net/20200819_109/1597801445734iCquF_JPEG/main_bn_pc_G.jpg"
              />
              <p className="title">이런 게 바로 겉귀속귀</p>
              <p className="subTitle">브라운앤프렌즈 2IN1 쿠션</p>
            </div>
            <div>
              <img
                alt="mainSlideBanner6"
                src="https://shop-phinf.pstatic.net/20200813_223/1597283242806xorcG_JPEG/main_bn_pc_G.jpg"
              />
              <p className="title">이런 게 바로 겉귀속귀</p>
              <p className="subTitle">브라운앤프렌즈 2IN1 쿠션</p>
            </div>
            <div>
              <img
                alt="mainSlideBanner7"
                src="https://shop-phinf.pstatic.net/20200814_123/1597366489174NWIzB_JPEG/main_bn_pc_G_28129.jpg"
              />
              <p className="title">이 구역 귀여움 담당</p>
              <p className="subTitle">BT21 피규어 거치대</p>
            </div>
            <div>
              <img
                alt="mainSlideBanner8"
                src="https://shop-phinf.pstatic.net/20200810_192/1597020765031Sw60l_JPEG/main_bn_pc_02.jpg"
              />
              <p className="title">이런 게 바로 겉귀속귀</p>
              <p className="subTitle">브라운앤프렌즈 2IN1 쿠션</p>
            </div>
          </Slider>
        </div>
        <MainGoToCategory />
        <MainRealReview />
        <MainAdvertisingBanner />
        <MainCeramicAdvertisingBanner />
        <MainLookAround />
        <MainBottomBanner />
      </div>
    );
  }
}

export default Main;
