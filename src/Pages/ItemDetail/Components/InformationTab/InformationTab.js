import React, { Component } from 'react';
import './InformationTab.scss';

class InformationTab extends Component {
  render() {
    const {
      productStatus,
      itemNumber,
      supplier,
      brand,
      modelName,
      areaOfProduction,
      dateOfManufacture,
    } = this.props.itemData;
    return (
      <div className="informationTab">
        <h2 className="tab">상세정보</h2>
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
                let ratio = parseInt((count / total()) * 100);
                return (
                  <li key={id}>
                    <span className="option">{option}</span>
                    <div className="line">
                      <div
                        className={
                          max() === index ? 'activeLine top' : 'activeLine'
                        }
                        style={{ width: `${ratio}%` }}
                      />
                      <div className="backgroundLine"></div>
                    </div>
                    <span
                      className={max() === index ? 'count top' : 'count'}
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
        <h2 className="tab">상세이미지</h2>
        <div className="imageContainer">
          <img
            src="https://proxy.smartstore.naver.com/img/bGluZWZyaWVuZHMxLmNhZmUyNC5jb20vX3dpemZhc3RhL2J0MjFfcy9kb2xsLzg4MDk3MDg2NTIzNzNfMjg1OTkzNS5qcGc/dj0yMDIwMDgzMTA1MjUxNg==?token=35ff2ba2b5835ded1865fb6d7fbcf4eb"
            alt="상세 이미지"
          />
          <img
            src="https://proxy.smartstore.naver.com/img/bGluZWZyaWVuZHMxLmNhZmUyNC5jb20vX3dpemZhc3RhL2J0MjFfcy9kb2xsLzg4MDk3MDg2NTIzNzNfOTkuanBnP3Y9MjAyMDA4MzEwNTI1MTY=?token=4bc3ad297cbbf33bd50ccc141ffef074"
            alt="상품 정보"
          />
          <img
            src="https://proxy.smartstore.naver.com/img/bGluZWZyaWVuZHMxLmNhZmUyNC5jb20vaW5mb18yX2J0MjEuanBn?token=dc057062f4c4bdb65991a47148f02755"
            alt="스토어 규정"
          />
        </div>
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

const total = () => {
  let total = 0;

  for (let data of SHIP_DATA) {
    total = total + data.count;
  }

  return total;
};

const max = () => {
  let max = 0;
  const counts = [];

  for (let data of SHIP_DATA) {
    counts.push(data.count);
  }

  max = Math.max(...counts);
  return counts.indexOf(max);
};
