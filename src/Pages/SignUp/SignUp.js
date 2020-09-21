import React, { Component } from 'react';
import './SignUp.scss';

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
    };
  }

  idInput = (event) => {
    this.setState({
      signUpIdValue: event.target.value,
    });
  };

  idCheck = () => {
    const isIdValidList = this.state.signUpIdValue.length > 0;
    console.log(isIdValidList);
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
    const pwdInputValid =
      this.state.signUpPwdValue.length > 8 &&
      this.state.signUpPwdValue.length < 20;
    console.log(pwdInputValid);
    this.setState({
      isPwdInputValid: pwdInputValid,
    });
  };

  handleEqualPwd = () => {
    const pwdEqual = this.state.signUpPwdValue === this.state.signUpPwdCheck;
    console.log(pwdEqual);
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
    console.log(nameValid);
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
    console.log(yrValid);

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
    const monthValid = this.state.signUpMonthValue.length === 3;
    console.log(monthValid);

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
    const dayValid = this.state.signUpDayValue.length === 2;
    console.log(dayValid);
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
    console.log(genderValid);
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
    console.log(numValid);
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
    console.log(this.isEveryInputValid());
    if (this.isEveryInputValid()) {
      alert('로그인 성공');
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
    fetch('http://10.58.4.217:8000/user/signup', {
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
    return (
      <>
        <header>
          <div className="signUpLogoBorder">
            <img className="signUpLogo"></img>
          </div>
        </header>
        <main>
          <div className="signUpId">
            <a className="signUpIdText">아이디</a>
            <input
              className="signUpIdInput"
              type="text"
              onChange={this.idInput}
              onBlur={this.idCheck}
            ></input>
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
            <input
              className="signUpPwdInput"
              type="password"
              onChange={this.pwdInput}
              onBlur={this.pwdInputCheck}
            ></input>
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
            <input
              className="signUpPwdCheck"
              type="password"
              onChange={this.pwdCheckInput}
              onBlur={this.handleEqualPwd}
            ></input>
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
            <div classname="signUpBdayText">생년월일</div>
            <input
              className="bDayYr"
              type="text"
              placeholder="  년 (4자)"
              onChange={this.yrInput}
              onBlur={this.yrCheck}
            ></input>
            <span
              className={
                isYrValid === null || isYrValid
                  ? 'hideErrorMsg'
                  : 'showErrorMsg'
              }
            >
              태어난 년도 4자리를 정확하게 입력하세요.
            </span>
            <select
              className="month"
              onChange={this.monthInput}
              onBlur={this.monthCheck}
            >
              <option value="" disabled selected>
                월
              </option>
              <option value="Jan">1</option>
              <option value="Feb">2</option>
              <option value="Mar">3</option>
              <option value="Apr">4</option>
              <option value="May">5</option>
              <option value="Jun">6</option>
              <option value="Jul">7</option>
              <option value="Aug">8</option>
              <option value="Sep">9</option>
              <option value="Oct">10</option>
              <option value="Nov">11</option>
              <option value="Dec">12</option>
            </select>
            <span
              className={
                isMonthValid === null || isMonthValid
                  ? 'hideErrorMsg'
                  : 'showErrorMsg'
              }
            >
              태어난 월을 선택하세요.
            </span>
            <input
              className="bDayDay"
              type="text"
              placeholder="일"
              onChange={this.dayInput}
              onBlur={this.dayCheck}
            ></input>
            <span
              className={
                isDayValid === null || isDayValid
                  ? 'hideErrorMsg'
                  : 'showErrorMsg'
              }
            >
              태어난 일(날짜) 2자리를 정확하게 입력하세요.
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
              placeholder="선택입력"
              onChange={this.emailInput}
            ></input>
          </div>
          <div className="phoneNumber">
            <a className="phoneNumberText">휴대전화</a>
            <input
              className="phoneNumberInput"
              placeholder="전화번호 입력 ( - 없이)"
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
        </main>
        <footer></footer>
      </>
    );
  }
}

export default SignUp;

// idWarning = (event) => {
//   this.setState({
//     signUpIdValue: event.target.value,
//   });
// };

// handleInput = (event) => {
//   const {name, value} = event.target
//   this.setState({
//     [name]: value,
//   });
// };

// bDayValid = () => {
//   const { signUpYrValue, signUpDayValue } = this.state;
//   const signUpYrValid = signUpYrValue.length !== 4;
//   const signUpDayValid = signUpDayValue.length !== 2;
//   const validation = {
//     [signUpYrValid]: '4자리',
//     // [signUpDayValid]: '2자리',
//   };

//   this.setState({
//     errorSign: validation[signUpYrValid],
//   });
// };

{
  /* <p className="signUpIdError1">{this.state.signUpIdValue}</p> */
}
