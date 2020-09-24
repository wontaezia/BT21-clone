import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Slider from 'react-slick';
import MainBottomBanner from './MainBottomBanner/MainBottomBanner';
import MainLookAround from './MainLookAround/MainLookAround';
import MainAdvertisingBanner from './MainAdvertisingBanner/MainAdvertisingBanner';
import MainCeramicAdvertisingBanner from './MainCeramicAdvertisingBanner/MainCeramicAdvertisingBanner';
import MainGoToCategory from './MainGoToCategory/MainGoToCategory';
import MainRealReview from './MainRealReview/MainRealReview';
import Footer from '../../../src/Components/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Main.scss';

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
        <Nav />
        <Slider {...settings}>
          <div className="slide whiteText">
            <img
              alt="mainSlideBanner1"
              src="https://shop-phinf.pstatic.net/20200902_265/1599009589348S9Lw1_JPEG/main_bn_pc_G.jpg"
            />
            <div className="textContainer">
              <p className="title">
                BT21
                <br /> 유니버스 인형
              </p>
              <p className="subTitle">MANG 에디션</p>
            </div>
          </div>
          <div className="slide">
            <img
              alt="mainSlideBanner2"
              src="https://shop-phinf.pstatic.net/20200824_82/1598230934853tKWGj_JPEG/main_bn_pc_02_28129.jpg"
            />
            <div className="textContainer">
              <p className="title">
                귀여움을 <br />
                쭈압쭈압
              </p>
              <p className="subTitle">BT21 BABY 버블티 인형</p>
            </div>
          </div>
          <div className="slide whiteText downText">
            <img
              alt="mainSlideBanner3"
              src="https://shop-phinf.pstatic.net/20200824_158/1598261047755is5jE_JPEG/main_bg_pc.jpg"
            />
            <div className="textContainer">
              <p className="title">
                숨쉬기 편한 <br />
                마스크
              </p>
              <p className="subTitle">BT21 3D FIT MASK</p>
            </div>
          </div>
          <div className="slide">
            <img
              alt="mainSlideBanner4"
              src="https://shop-phinf.pstatic.net/20200820_274/1597887710464Imups_JPEG/main_bn_pc_G_28129.jpg"
            />
            <div className="textContainer">
              <p className="title">
                이런 게 바로 <br />
                겉귀속귀
              </p>
              <p className="subTitle">브라운앤프렌즈 2IN1 쿠션</p>
            </div>
          </div>
          <div className="slide">
            <img
              alt="mainSlideBanner5"
              src="https://shop-phinf.pstatic.net/20200819_109/1597801445734iCquF_JPEG/main_bn_pc_G.jpg"
            />
            <div className="textContainer">
              <p className="title">
                토닥토닥,
                <br />
                오늘도
                <br />
                고생많았어
              </p>
              <p className="subTitle">BT21 허그미 쿠션</p>
            </div>
          </div>
          <div className="slide">
            <img
              alt="mainSlideBanner6"
              src="https://shop-phinf.pstatic.net/20200813_223/1597283242806xorcG_JPEG/main_bn_pc_G.jpg"
            />
            <div className="textContainer">
              <p className="title">
                우리가 <br />
                사랑한 도시
              </p>
              <p className="subTitle">CITY EDITION</p>
            </div>
          </div>
          <div className="slide">
            <img
              alt="mainSlideBanner7"
              src="https://shop-phinf.pstatic.net/20200814_123/1597366489174NWIzB_JPEG/main_bn_pc_G_28129.jpg"
            />
            <div className="textContainer">
              <p className="title">
                이 구역 <br />
                귀여움 담당
              </p>
              <p className="subTitle">BT21 피규어 거치대</p>
            </div>
          </div>
          <div className="slide">
            <img
              alt="mainSlideBanner8"
              src="https://shop-phinf.pstatic.net/20200810_192/1597020765031Sw60l_JPEG/main_bn_pc_02.jpg"
            />
            <div className="textContainer">
              <p className="title">
                전설의 <br />
                브롤러가
                <br />내 품에
              </p>
              <p className="subTitle">
                피규어 키링 <br />
                &amp; 패션 액세서리
              </p>
            </div>
          </div>
        </Slider>
        <MainGoToCategory />
        <MainRealReview />
        <MainAdvertisingBanner />
        <MainCeramicAdvertisingBanner />
        <MainLookAround />
        <MainBottomBanner />
        <Footer />
      </div>
    );
  }
}

export default Main;
