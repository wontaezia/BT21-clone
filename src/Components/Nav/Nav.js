import React, { Component } from 'react';
import NavbarCategory from './NavbarCategory/NavbarCategory';
import './Nav.scss';
import { Link, withRouter } from 'react-router-dom';

class Nav extends Component {
  state = {
    hasToken: false,
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    console.log(token);
    this.setState({
      hasToken: token,
    });
  }

  render() {
    return (
      <div className="Nav">
        <div className="naverLogobar">
          <div className="naverLogobarInner">
            <div className="naverLink">
              <img className="naverLogo" />
              <img className="naverShoppingLogo" />
            </div>
            <Link to={'/SignIn'}>
              <div className="signInBar">
                <button
                  className={
                    this.state.hasToken
                      ? 'naverSignInBtn token'
                      : 'naverSignInBtn'
                  }
                >
                  로그인
                </button>
                <img className="signInImg" />
              </div>
            </Link>
          </div>
        </div>
        <div className="logobar">
          <div className="logoDiv">
            <Link to={'/'}>
              <img
                className="linefriendsLogo"
                alt="lineLogo"
                src="https://shop-phinf.pstatic.net/20200504_93/1588582588622OE2qc_PNG/main_logo_b.png"
              />
            </Link>
          </div>
          <div className="searchDiv">
            <input
              className="searchbox"
              type="search"
              placeholder="검색어를 입력해보세요"
            ></input>
            <div className="magnifyImg"></div>
          </div>
        </div>
        <div className="Navbar">
          <NavbarCategory text="케릭터" options={CHARACTER_OPTIONS} />
          <NavbarCategory text="NEW" />
          <NavbarCategory text="THEME" options={THEME_OPTIONS} />
          <NavbarCategory text="BT21 BABY" options={BT21BABY_OPTIONS} />
          <NavbarCategory text="SALE" />
          <NavbarCategory text="토이" options={TOY_OPTIONS} />
          <NavbarCategory text="디자인문구" options={OFFICE_OPTIONS} />
          <NavbarCategory text="디지털" options={DIGITAL_OPTIONS} />
          <NavbarCategory text="패션의류" options={CLOTHING_OPTIONS} />
          <NavbarCategory text="패션잡화" options={ACCESSORIES_OPTIONS} />
          <NavbarCategory text="리빙" options={LIVING_OPTIONS} />
          <NavbarCategory text="키즈" options={KIDS_OPTIONS} />
          <NavbarCategory text="더보기" />
        </div>
      </div>
    );
  }
}

const CHARACTER_OPTIONS = {
  브라운앤프렌즈: '/brownandfriends',
  BT21: '/itemlist',
  브롤스타즈: '/brawlstars',
};

const THEME_OPTIONS = {
  미니브라운앤프렌즈: '/minibrownandfriends',
  샐리프렌즈: '/sallyfriends',
};

const BT21BABY_OPTIONS = {
  문구: '/officesupply',
  리빙: '/living',
  디지털: '/digital',
  패션잡화: '/fashion',
  인형쿠션: '/dollandcushion',
};

const TOY_OPTIONS = {
  '중형인형 이상': '/midsizedoll',
  미니인형: '/minidoll',
  쿠션: '/cushion',
  피규어: '/figure',
};

const OFFICE_OPTIONS = {
  '다이어, 플래너': '/diaryplanner',
  '노트, 메모지': '/note',
  '필기류, 케이스': '/pencil',
  데코레이션: '/decoration',
  스티커시리즈: '/stickers',
};

const DIGITAL_OPTIONS = {
  폰케이스: '/phonecase',
  주변기기: '/deviceaccessories',
  스마트기기: '/digitaldevice',
  디지털케이스: '/digitalcase',
};

const CLOTHING_OPTIONS = {
  반팔의류: '/tshirt',
  긴팔의류: '/longsleeves',
  라운지웨어: '/loungewear',
  '양말,슬리퍼': '/socks',
};

const ACCESSORIES_OPTIONS = {
  가방: '/bag',
  키홀더: '/keyholder',
  뷰티: '/beauty',
  '모자,마스크': '/hatmask',
  '지갑,파우치': '/wallet',
};

const LIVING_OPTIONS = {
  '패브릭,홈데코': '/homedecoration',
  '식기,텀블러': '/silverware',
  '주방,욕실': '/kitchen',
  캠핑용품: '/camping',
  가공식품: '/processedfood',
};

const KIDS_OPTIONS = {
  의류: '/kidclothes',
  패션잡화: '/kidsaccessories',
  '주방,욕실': '/kitchen',
  '양말,슬리퍼': '/kidssocks',
};
export default withRouter(Nav);
