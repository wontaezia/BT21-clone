import React, { Component } from 'react';
import './MainRealReview.scss';

class MainRealReview extends Component {
  constructor() {
    super();
    this.state = {
      buttonOnImage: 'buttonOnImage',
      current: 1,
      borderNumber: 1,
      prePage: '',
      nextPage: '',
      preButtonOpacity: 'opacity',
      nextButtonOpacity: '',
    };
  }

  prePage = () => {
    this.setState({
      prePage: 'prePage',
      nextPage: '',
      preButtonOpacity: 'opacity',
      nextButtonOpacity: '',
    });
  };

  nextPage = () => {
    this.setState({
      prePage: '',
      nextPage: 'nextPage',
      preButtonOpacity: '',
      nextButtonOpacity: 'opacity',
    });
  };

  render() {
    const {
      preButtonOpacity,
      prePage,
      nextPage,
      nextButtonOpacity,
    } = this.state;
    return (
      <div className="MainRealReview">
        <strong className="title">생생한 리뷰</strong>
        <div className={`wrapSlideContent`}>
          <button
            className={`preButton ${preButtonOpacity}`}
            onClick={this.prePage}
          ></button>
          <div className="slideShow">
            <div className={`wrapSlideShowItem ${prePage} ${nextPage}`}>
              {reviewContent.map((review) => (
                <div className="slideShowItem" key={review.id}>
                  <img className="mainImage" src={review.reviewMainImg}></img>
                  <div className="textContents">
                    <strong>{review.alt}</strong>
                    <div className="ratingContainer">
                      <div className="ratingStarContent">
                        <span
                          className={
                            review.ratingNum > 0
                              ? 'fa fa-star star'
                              : 'fa fa-star-o star'
                          }
                        ></span>
                        <span
                          className={
                            review.ratingNum > 1
                              ? 'fa fa-star star'
                              : 'fa fa-star-o star'
                          }
                        ></span>
                        <span
                          className={
                            review.ratingNum > 2
                              ? 'fa fa-star star'
                              : 'fa fa-star-o star'
                          }
                        ></span>
                        <span
                          className={
                            review.ratingNum > 3
                              ? 'fa fa-star star'
                              : 'fa fa-star-o star'
                          }
                        ></span>
                        <span
                          className={
                            review.ratingNum > 4
                              ? 'fa fa-star star'
                              : 'fa fa-star-o star'
                          }
                        ></span>
                      </div>
                      <span className="ratingNum">
                        {review.ratingNum.toFixed(1)}
                      </span>
                    </div>
                    <div className="reviewerInfoContent">
                      <p>{review.review}</p>
                      <span className="userId">{review.userId}</span>
                      <span className="date">{review.date}</span>
                    </div>
                    <img className="subImage" src={review.reviewSubImg}></img>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className={`nextButton  ${nextButtonOpacity}`}
            onClick={this.nextPage}
          ></button>
        </div>
      </div>
    );
  }
}

export default MainRealReview;

const reviewContent = [
  {
    id: 1,
    reviewMainImg:
      'https://shop-phinf.pstatic.net/20191226_38/15773233421172s3z0_JPEG/14683176660337558_952120443.jpg?type=f750_750',
    alt: '라인프렌즈 BT21 RJ 유니버스 스탠딩 인형 세트 (5개입)',
    ratingNum: 5,
    review: '넘 귀여운 알제이 가족 드디어 구매하게 되어 너무 좋았어요',
    userId: 'okqk****',
    date: '20.07.13',
    reviewSubImg:
      'https://shop-phinf.pstatic.net/20191226_38/15773233421172s3z0_JPEG/14683176660337558_952120443.jpg?type=f750_750',
  },
  {
    id: 2,
    reviewMainImg:
      'https://shop-phinf.pstatic.net/20191224_162/1577153538097WuPxU_JPEG/14516926626919254_632221004.jpg?type=f750_750',
    alt: '라인프렌즈 코니 베이직 머그 컵커버 세트 330ml',
    ratingNum: 4,
    review: '귀여워요 :) 포장도 꼼꼼하게 해주셨어요 감사합니다',
    userId: 'myhy****',
    date: '20.09.14',
    reviewSubImg:
      'https://phinf.pstatic.net/checkout.phinf/20200914_72/1600087980289QjMK7_JPEG/review-attachment-93965d23-c2cc-43d7-b458-7e483af21182.jpeg?type=f300_300',
  },
  {
    id: 3,
    reviewMainImg:
      'https://shop-phinf.pstatic.net/20200810_183/1597045812457PqqM3_JPEG/17511216_49097631.jpg?type=f750_750',
    alt: '라인프렌즈 BT21 스틱 티 세트 (8개입)',
    ratingNum: 5.0,
    review: `'집에서 매일 밥먹고 나서 후식을 먹는데 살이 너무 찌는거같아서 후식으로 차를 마셔볼려고 주문했어요
    배송은 주문하고 이틀도 안되어서 왔어요👍👍
    
    틴케이스를 열자마자 달콤한 향이 화~악 나요
    틴케이스가 너무 귀여워서 차를 다마시고 나서도 여러모로 활용도가 높을거같아요. (친구가 놀러왔는데 틴케이스 탐내하더라구용ㅋㅋ)
    
    일반적으로 차를 사면 한가지맛으로 되어있는데 이건 8가지로 다양한맛으로 되어 있어서 기분에 따라 골라먹는 재미가 있어서 좋아여
    
    제 첫번째 픽은 텐더카카오닙스블렌드였는데 딱 제가원하던 맛이라서 밥먹고 나머지맛도 언능 먹고보고싶음ㅋㅋㅋ나머지맛도 완전 기대중😍
    
    스틱형태라서 그냥 휘휘 저어주면 되니까 마실때 너무 편하고,
    전체적으로 이쁘고 잘되어있어서 선물용으로도 무척 좋을거같아요'`,
    userId: 'okqk****',
    date: '20.07.13',
    reviewSubImg:
      'https://phinf.pstatic.net/image.nmv/shopnbuyer_2020_08_13_0/83a869af-dcf2-11ea-a69b-246e963a49a8_03.jpg?type=ffn300_300',
  },
  {
    id: 4,
    reviewMainImg:
      'https://shop-phinf.pstatic.net/20200810_220/1597046035339PJVvs_JPEG/17184629_49098129.jpg?type=f750_750',
    alt: '라인프렌즈 BT21 COOKY BABY 폼폼 에어팟 프로 케이스',
    ratingNum: 4,
    review: '예뻐용 맘에들어용 !',
    userId: 'woon****',
    date: '20.09.13',
    reviewSubImg:
      'https://phinf.pstatic.net/checkout.phinf/20200913_213/1599980364397TMogV_JPEG/review-attachment-a456882d-204d-415c-943f-b7156a0e722b.jpeg?type=f300_300',
  },
  {
    id: 5,
    reviewMainImg:
      'https://shop-phinf.pstatic.net/20200511_126/1589159587134P4XCN_JPEG/16828439_44673013.jpg?type=f750_750',
    alt: '라인프렌즈 미니 샐리 필로우 쿠션',
    ratingNum: 5,
    review: `저는 브라운 빠인데요...
    이번에 나온 인형은 샐리가... 더예ㅃ.더귀여ㅂ 
    아니 그렇습니아닙니모르겠아닙니댜?
    은은한 볼터치도 귀엽꾸 안았을 때 챡 감기고요.
    특히 누워서 한 팔로 샐리 안고 핸드폰 할때 그립감?이 좋습니다. 쫀득한하고 부드러운 재질`,
    userId: 'park****',
    date: '20.06.25',
    reviewSubImg:
      'https://phinf.pstatic.net/checkout.phinf/20200625_74/1593062559598fIjmA_JPEG/image.jpg?type=f300_300',
  },
];
