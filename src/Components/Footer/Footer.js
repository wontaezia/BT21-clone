import React, { Component } from 'react';
import Corporation from './Corporation/Corporation';
import './Footer.scss';

class Footer extends Component {
  state = {
    isActive: false,
  };

  handleActive = () => {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  };

  render() {
    const { isActive } = this.state;
    return (
      <footer className="Footer">
        <div className="inner">
          <div className="storeInfo">
            <span className="returns">
              반품 배송비, 반품 배송주소 등은 해당 상품 페이지 내 안내를
              참고해주세요.
            </span>
            <span className="customerCare">라인프렌즈 주식회사 1544-5921</span>
            <div className="more">
              <button onClick={this.handleActive} className="moreButton">
                판매자 정보
              </button>
              <div className={isActive ? 'info isActive' : 'info'}>
                <h3>판매자정보</h3>
                <table>
                  <tbody>
                    {STORE_INFO.map((tr) => {
                      const { th, td } = tr;
                      return (
                        <tr key={th}>
                          <th>{th}</th>
                          <td>{td}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ul className="termsAndConditions">
            {TERMS_AND_CONDITIONS.map((item) => {
              return (
                <li key={item}>
                  <button>{item}</button>
                </li>
              );
            })}
          </ul>
          <ul className="corporationContainer">
            {CORPORATION.map((menu) => {
              const { id, title, values } = menu;
              return (
                <Corporation key={id} id={id} title={title} values={values} />
              );
            })}
          </ul>
          <span className="responsibility">
            네이버㈜는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품,
            상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.
          </span>
          <span className="copyright">
            Copyright © NAVER Corp. All Rights Reserved.
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;

const TERMS_AND_CONDITIONS = [
  '네이버 약관',
  '네이버페이 약관',
  '전자금융거래 이용약관',
  '개인정보처리방침',
  '책임의 한계와 법적고지',
  '청소년보호정책',
  '지식재산권신고센터',
  '안전거래 가이드',
  '쇼핑&페이 고객센터',
];

const STORE_INFO = [
  {
    th: '상호명',
    td: '라인프렌즈 주식회사(사업자/법인사업자)',
  },
  {
    th: '대표자',
    td: '김성훈',
  },
  {
    th: '사업자등록번호',
    td: '7268700030',
  },
  {
    th: '통신판매업번호',
    td: '2017-서울용산-0174',
  },
  {
    th: '사업장 소재지',
    td: '서울특별시 용산구 한남대로 98 (일신빌딩) 5층 (우:04418)',
  },
  {
    th: '고객센터',
    td: '1544-5921',
  },
  {
    th: 'e-mail',
    td: 'customercare@linefriends.com',
  },
];

const CORPORATION = [
  {
    id: 'aboutOurCompany',
    title: '네이버㈜',
    values: [
      '사업자등록번호 220-81-62517',
      '통신판매업신고번호 2006-경기성남-0692호',
      '대표이사 한성숙',
      '경기도 성남시 분당구 불정로 6 네이버 그린팩토리 13561',
      '전화 1588-3819',
      '사업자등록정보 확인',
      '호스팅 서비스 제공: NAVER Business Platform',
    ],
  },
  {
    id: 'customerServiceCenter',
    title: '고객센터',
    values: [
      '강원도 춘천시 퇴계로 89 강원전문건설회관',
      '전화 1588-3819',
      '결제도용신고 1588-3816',
      '1:1 문의 바로가기',
    ],
  },
  {
    id: 'disputeHandling',
    title: '전자금융거래 분쟁처리',
    values: ['전화 1588-3819', '1:1문의 바로가기'],
  },
];
