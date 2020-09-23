import React, { Component } from 'react';
import Reviews from './Reviews/Reviews';
import './InformationTab.scss';

class InformationTab extends Component {
  infoTab = React.createRef();
  imagesTab = React.createRef();
  reviewsTab = React.createRef();
  information = React.createRef();

  componentDidMount() {
    const { imagesTab, infoTab, reviewsTab, information } = this;
    const { getSectionsOffsetTop, getInformationOffsetTop } = this.props;

    setTimeout(() => {
      getSectionsOffsetTop(infoTab);
      getSectionsOffsetTop(imagesTab);
      getSectionsOffsetTop(reviewsTab);
      getInformationOffsetTop(information);
    }, 1000);
  }

  render() {
    const {
      photoReview,
      productStatus,
      itemNumber,
      supplier,
      brand,
      modelName,
      areaOfProduction,
      dateOfManufacture,
    } = this.props.itemData;
    return (
      <div className="InformationTab" ref={this.information}>
        <h2 className="tab" data-name="infoTab" ref={this.infoTab}>
          상세정보
        </h2>
        <div className="shippingDays">
          <h3>배송기간</h3>
          <div className="content">
            <div className="text">
              <span className="top">이 상품의 배송기간</span>
              <span className="middle">
                평균 배송기간 <span>2일이내</span> 상품입니다.
              </span>
              <span className="bottom">
                배송기간은 주말/공휴일을 제외한 영업일 기준
              </span>
            </div>
            <ul className="chart">
              {SHIP_DATA.map((data, index) => {
                const { id, option, count } = data;
                let ratio = parseInt((count / getTotalCount()) * 100);
                return (
                  <li key={id}>
                    <span className="option">{option}</span>
                    <div className="line">
                      <div
                        className={
                          getMaxInCount() === index
                            ? 'activeLine max'
                            : 'activeLine'
                        }
                        style={{ width: `${ratio}%` }}
                      />
                      <div className="backgroundLine"></div>
                    </div>
                    <span
                      className={
                        getMaxInCount() === index ? 'count max' : 'count'
                      }
                    >{`${count}건 (${count ? ratio : 0}%)`}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="productTable">
          <h3>상품정보</h3>
          <table>
            <tbody>
              <tr>
                <th>상품상태</th>
                <td>{productStatus}</td>
                <th>상품번호</th>
                <td>{itemNumber}</td>
              </tr>
              <tr>
                <th>제조사</th>
                <td>{supplier}</td>
                <th>브랜드</th>
                <td>{brand}</td>
              </tr>
              <tr>
                <th>모델명</th>
                <td>{modelName}</td>
                <th>원산지</th>
                <td>{areaOfProduction}</td>
              </tr>
              <tr>
                <th>제조일자</th>
                <td colSpan="3">{dateOfManufacture}</td>
              </tr>
            </tbody>
          </table>
          <div>
            상품정보 관련 문의사항은 <span>Q&A</span>에 남겨주세요.
          </div>
          <table>
            <tbody>
              <tr>
                <th>영수증발급</th>
                <td>신용카드전표, 현금영수증발급</td>
              </tr>
              <tr className="afterService">
                <th>A/S 안내</th>
                <td>
                  <div>1544-5921</div>
                  <div>상품상제 참조</div>
                </td>
              </tr>
              <tr className="certification">
                <th>인증정보</th>
                <td>
                  <div>
                    [어린이제품]안전확인 - 한국기계전기전자시험연구원(KTC) -
                  </div>
                  <div>(주) 준보코리아</div>
                  <div className="code">CB063R2606-9003</div>
                  <div>
                    + 해당 인증정보는 판매자가 등록한 것으로 등록 정보에 대한
                    일체의 책임은 판매자에게 있습니다.
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="tab" data-name="imagesTab" ref={this.imagesTab}>
          상세이미지
        </h2>
        <div className="imageContainer">
          <img src="/Images/8809708652373_0.jpg" alt="상세 이미지" />
          <img src="/Images/8809708652373_1.jpg" alt="상품 정보" />
          <img src="/Images/8809708652373_2.jpg" alt="스토어 규정" />
        </div>
        <h2 className="tab" data-name="reviewsTab" ref={this.reviewsTab}>
          리뷰
        </h2>
        <Reviews reviews={photoReview} />
        <ul className="writeReviewsForm">
          <li>
            <span>이름</span>
            <input type="text" placeholder="이름을 입력해주세요 (필수)" />
          </li>
          <li>
            <span>이름</span>
            <input type="text" placeholder="이름을 입력해주세요 (필수)" />
          </li>
          <li>
            <span>이름</span>
            <input type="text" placeholder="이름을 입력해주세요 (필수)" />
          </li>
        </ul>
      </div>
    );
  }
}

export default InformationTab;

const SHIP_DATA = [
  {
    id: 1,
    option: '1일 이내',
    count: 9,
  },
  {
    id: 2,
    option: '2일 이내',
    count: 29,
  },
  {
    id: 3,
    option: '3일 이내',
    count: 1,
  },
  {
    id: 4,
    option: '4일 이상',
    count: 0,
  },
];

function getTotalCount() {
  let counts = [];

  for (let data of SHIP_DATA) {
    counts.push(data.count);
  }

  return counts.reduce((accumulator, count) => accumulator + count, 0);
}

function getMaxInCount() {
  let max = 0;
  const counts = [];

  for (let data of SHIP_DATA) {
    counts.push(data.count);
  }

  max = Math.max(...counts);
  return counts.indexOf(max);
}
