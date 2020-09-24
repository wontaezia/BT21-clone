import React, { Component } from 'react';
import './SignUp.scss';
import { API } from '../../config';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      signUpIdValue: '',
      signUpPwdValue: '',
      signUpPwdCheck: '',
      signUpNameValue: '',
      signUpYrValue: '',
      signUpMonthValue: '',
      signUpDayValue: '',
      signUpGenderValue: '',
      signUpEmailValue: '',
      signUpNumValue: '',
      isPwdInputValid: null,
      isPwdValid: null,
      isIdValid: null,
      isNameValid: null,
      isYrValid: null,
      isMonthValid: null,
      isDayValid: null,
      isGenderValid: null,
      isNumValid: null,
      pwdSecurity: false,
    };
  }

  idInput = (event) => {
    this.setState({
      signUpIdValue: event.target.value,
    });
  };

  idCheck = () => {
    const isIdValidList = this.state.signUpIdValue.length > 0;
    this.setState({
      isIdValid: isIdValidList,
    });
  };

  pwdInput = (event) => {
    this.setState({
      signUpPwdValue: event.target.value,
    });
  };

  pwdCheckInput = (event) => {
    this.setState({
      signUpPwdCheck: event.target.value,
    });
  };

  pwdInputCheck = () => {
    const { signUpPwdValue } = this.state;

    const pwdInputValid =
      signUpPwdValue.length > 8 && signUpPwdValue.length < 20;

    this.setState({
      isPwdInputValid: pwdInputValid,
    });
  };

  handleEqualPwd = () => {
    const pwdEqual =
      this.state.signUpPwdValue === this.state.signUpPwdCheck &&
      this.state.signUpPwdCheck > 0;
    this.setState({
      isPwdValid: pwdEqual,
    });
  };

  nameInput = (event) => {
    this.setState({
      signUpNameValue: event.target.value,
    });
  };

  nameCheck = () => {
    const nameValid = this.state.signUpNameValue.length > 0;
    this.setState({
      isNameValid: nameValid,
    });
  };

  yrInput = (event) => {
    this.setState({
      signUpYrValue: event.target.value,
    });
  };

  yrCheck = (event) => {
    const yrValid = this.state.signUpYrValue.length === 4;

    this.setState({
      isYrValid: yrValid,
    });
  };

  monthInput = (event) => {
    this.setState({
      signUpMonthValue: event.target.value,
    });
  };

  monthCheck = (event) => {
    const monthValid = this.state.signUpMonthValue.length === 2;

    this.setState({
      isMonthValid: monthValid,
    });
  };

  dayInput = (event) => {
    this.setState({
      signUpDayValue: event.target.value,
    });
  };

  dayCheck = () => {
    const dayValid =
      this.state.signUpDayValue.length === 2 &&
      this.state.signUpDayValue < 32 &&
      this.state.signUpDayValue > 0;

    this.setState({
      isDayValid: dayValid,
    });
  };

  genderInput = (event) => {
    this.setState({
      signUpGenderValue: event.target.value,
    });
  };

  genderCheck = (event) => {
    const { signUpGenderValue } = this.state;
    const genderValid =
      signUpGenderValue === 'male' ||
      signUpGenderValue === 'female' ||
      signUpGenderValue === 'notApplicable';
    this.setState({
      isGenderValid: genderValid,
    });
  };

  emailInput = (event) => {
    this.setState({
      signUpEmailValue: event.target.value,
    });
  };

  numInput = (event) => {
    this.setState({
      signUpNumValue: event.target.value,
    });
  };

  numCheck = (event) => {
    const numValid = this.state.signUpNumValue.length !== 11;
    this.setState({
      isNumValid: !numValid,
    });
  };

  isEveryInputValid = () => {
    const {
      isIdValid,
      isPwdInputValid,
      isPwdValid,
      isNameValid,
      isYrValid,
      isMonthValid,
      isDayValid,
      isGenderValid,
      isNumValid,
    } = this.state;
    return (
      isIdValid &&
      isPwdInputValid &&
      isPwdValid &&
      isNameValid &&
      isYrValid &&
      isMonthValid &&
      isDayValid &&
      isGenderValid &&
      isNumValid
    );
  };

  subscribeBtn = () => {
    if (this.isEveryInputValid()) {
      alert('가입 성공');
    } else {
      this.numCheck();
      this.genderCheck();
      this.idCheck();
      this.pwdInputCheck();
      this.nameCheck();
      this.yrCheck();
      this.monthCheck();
      this.dayCheck();
    }
  };

  handleClick = () => {
    fetch(`${API}/user/signup`, {
      method: 'POST',
      body: JSON.stringify({
        ID: this.state.signUpIdValue,
        password: this.state.signUpPwdCheck,
        name: this.state.signUpNameValue,
        year: this.state.signUpYrValue,
        month: this.state.signUpMonthValue,
        day: this.state.signUpDayValue,
        gender: this.state.signUpGenderValue,
        email: this.state.signUpEmailValue,
        number: this.state.signUpNumValue,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.Authorization) {
          localStorage.setItem('token', result.Authorization);
          alert('로그인 성공');
          this.props.history.push('/Main');
        } else if (result.message === 'UNAUTHORIZED') {
          alert('비밀번호 확인');
        }
      });
  };

  checkToken = () => {
    const token = localStorage.getItem('token');
  };

  render() {
    const {
      isIdValid,
      isPwdInputValid,
      isPwdValid,
      isNameValid,
      isYrValid,
      isMonthValid,
      isDayValid,
      isGenderValid,
      isNumValid,
    } = this.state;

    let dateErrorMsg;
    if (!isYrValid) {
      dateErrorMsg = '태어난 년도 4자리를 정확하게 입력하세요.';
    } else if (!isMonthValid) {
      dateErrorMsg = '태어난 월을 선택하세요.';
    } else if (!isDayValid) {
      dateErrorMsg = '태어난 일(날짜) 2자리를 정확하게 입력하세요.';
    }

    return (
      <div className="signUp">
        <header>
          <div className="signUpLogoBorder">
            <img className="signUpLogo" />
          </div>
        </header>
        <div className="signUpForm">
          <div className="signUpId">
            <a className="signUpIdText">아이디</a>
            <div className="signUpIdBorder">
              <input
                className="signUpIdInput"
                type="text"
                onChange={this.idInput}
                onBlur={this.idCheck}
              ></input>
              <div className="naverEmail">@naver.com</div>
            </div>
            <span
              className={
                isIdValid === null || isIdValid
                  ? 'hideErrorMsg'
                  : 'showErrorMsg'
              }
            >
              필수 정보입니다.
            </span>
          </div>
          <div className="signUpPwd">
            <a className="signUpPwdText">비밀번호</a>
            <div className="signUpPwdInputBorder">
              <input
                className="signUpPwdInput"
                type="password"
                onChange={this.pwdInput}
                onBlur={this.pwdInputCheck}
              ></input>

              <div className="pwdSecurityContainer">
                <div
                  className={
                    isPwdInputValid === true
                      ? 'pwdSecurityText'
                      : 'pwdSecurityText check'
                  }
                >
                  안전
                </div>
                <div
                  className={
                    isPwdInputValid === true
                      ? 'pwdSecurity'
                      : 'pwdSecurity check'
                  }
                ></div>
              </div>
            </div>

            <span
              className={
                isPwdInputValid === null || isPwdInputValid
                  ? 'hideErrorMsg'
                  : 'showErrorMsg'
              }
            >
              8-20자리 비밀번호가 필요합니다.
            </span>
          </div>
          <div className="signUpPwdRepeat">
            <a className="signUpPwdTextRepeat">비밀번호 재확인</a>
            <div className="signUpRepeatPwdBorder">
              <input
                className="signUpPwdCheck"
                type="password"
                onChange={this.pwdCheckInput}
                onBlur={this.handleEqualPwd}
              ></input>
              <div
                className={
                  isPwdValid === true
                    ? 'pwdRepeatSecurity'
                    : 'pwdRepeatSecurity check'
                }
              ></div>
            </div>
            <span
              className={
                isPwdValid === null || isPwdValid
                  ? 'hideErrorMsg'
                  : 'showErrorMsg'
              }
            >
              비밀번호가 일치하지 않습니다.
            </span>
          </div>
          <div className="signUpName">
            <div className="signUpNameText">이름</div>
            <input
              className="signUpNameInput"
              type="text"
              onChange={this.nameInput}
              onBlur={this.nameCheck}
            ></input>
            <span
              className={
                isNameValid === null || isNameValid
                  ? 'hideErrorMsg'
                  : 'showErrorMsg'
              }
            >
              필수정보입니다.
            </span>
          </div>
          <div className="signUpBday">
            <div className="signUpInputBox">
              <div className="signUpBdayText">생년월일</div>
              <input
                className="bDayYr"
                type="text"
                placeholder="  년 (4자)"
                onChange={this.yrInput}
                onBlur={this.yrCheck}
              ></input>
              <select
                className="month"
                onChange={this.monthInput}
                onBlur={this.monthCheck}
                defaultValue={'DEFAULT'}
              >
                <option value="default" disabled>
                  월
                </option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <input
                className="bDayDay"
                type="text"
                placeholder="  일"
                onChange={this.dayInput}
                onBlur={this.dayCheck}
              ></input>
            </div>
          </div>
          <div className="signUpWarningBox">
            <span
              className={
                isYrValid !== false &&
                isMonthValid !== false &&
                isDayValid !== false
                  ? 'hideErrorMsg'
                  : 'showErrorMsg'
              }
            >
              {dateErrorMsg}
            </span>
          </div>
          <div className="signUpSex">
            <a className="signUpSexText">성별</a>
            <select
              name="sexSelectBox"
              onChange={this.genderInput}
              onBlur={this.genderCheck}
            >
              <option value="" disabled selected>
                성별
              </option>
              <option value="male">남성</option>
              <option value="female">여성</option>
              <option value="notApplicable">선택안함</option>
            </select>
            <span
              className={
                isGenderValid === null || isGenderValid
                  ? 'hideErrorMsg'
                  : 'showErrorMsg'
              }
            >
              성별을 선택해주세요.
            </span>
          </div>
          <div className="signUpEmail">
            <div className="signUpemailText">
              <a className="signUpEmailText">본인 확인 이메일</a>
              <a className="signUpEmailTextOption">(선택)</a>
            </div>
            <input
              className="signUpEmailInput"
              placeholder="  선택입력"
              onChange={this.emailInput}
            ></input>
          </div>
          <div className="phoneNumber">
            <a className="phoneNumberText">휴대전화</a>
            <input
              className="phoneNumberInput"
              placeholder="  전화번호 입력 ( - 없이)"
              onChange={this.numInput}
              onBlur={this.numCheck}
            ></input>
            <span
              className={
                isNumValid === null || isNumValid
                  ? 'hideErrorMsg'
                  : 'showErrorMsg'
              }
            >
              필수 정보입니다.
            </span>
          </div>
          <div className="signInBtnDiv">
            <button
              className="signInBtn"
              onClick={() => {
                this.subscribeBtn();
                this.handleClick();
              }}
            >
              가입하기
            </button>
          </div>
        </div>
        <footer>
          <div className="footerInfo">
            <div className="termsCondition">
              이용약관 | <strong> 개인정보처리방침 </strong> | 책임의 한계와
              법적고지 | 회원정보 | 고객센터
            </div>
            <div className="corpInfo">
              <img className="smallLogo" />
              <div className="copyright">
                Copyright <strong>NAVER Corp.</strong> All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default SignUp;
