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
      notEqual: false,
      idCheck: false,
      nameCheck: false,
      yrCheck: false,
    };
    this.idInput = this.idInput.bind(this);
    this.pwdInput = this.pwdInput.bind(this);
    this.pwdCheck = this.pwdCheck.bind(this);
  }

  // idWarning = (event) => {
  //   this.setState({
  //     signUpIdValue: event.target.value,
  //   });
  // };

  idInput = (event) => {
    this.setState({
      signUpIdValue: event.target.value,
    });
  };

  idValidCheck = () => {
    const idCheckList = this.state.signUpIdValue.length < 5;
    this.setState({
      idCheck: idCheckList,
    });
  };

  pwdInput = (event) => {
    this.setState({
      signUpPwdValue: event.target.value,
    });
  };

  pwdCheck = (event) => {
    this.setState({
      signUpPwdCheck: event.target.value,
    });
  };

  handleEqualPwd = () => {
    const pwdEqual = this.state.signUpPwdValue !== this.state.signUpPwdCheck;

    this.setState({
      notEqual: pwdEqual,
    });
  };

  nameInput = (event) => {
    this.setState({
      signUpNameValue: event.target.value,
    });
  };

  nameCheck = () => {
    const nameValid = this.state.signUpNameValue.length === 0;

    this.setState({
      nameCheck: nameValid,
    });
  };

  yrInput = (event) => {
    this.setState({
      signUpYrValue: event.target.value,
    });
  };

  monthInput = (event) => {
    this.setState({
      signUpMonthValue: event.target.value,
    });
  };

  dayInput = (event) => {
    this.setState({
      signUpDayValue: event.target.value,
    });
  };

  bDayValid = () => {
    const { signUpYrValue, signUpDayValue } = this.state;
    const signUpYrValid = signUpYrValue.length === 4;
    const signUpDayValid = signUpDayValue.length === 2;
    const validation = {
      [signUpYrValid]: '4자리',
      [signUpDayValid]: '2자리',
    };

    this.setState({
      errorSign: validation[signUpYrValid || signUpDayValid],
    });
  };

  // yrCheck = (event) => {
  //   const yrValid = this.state.signUpYrValue.length === 4;

  //   this.setState({
  //     yrCheck: yrValid,
  //   });
  // };

  render() {
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
              onBlur={this.idValidCheck}
            ></input>
            <span className={this.state.idCheck ? 'notGood' : 'good'}>
              아이디가 짧습니다
            </span>
            {/* <p className="signUpIdError1">{this.state.signUpIdValue}</p> */}
          </div>
          <div className="signUpPwd">
            <a className="signUpPwdText">비밀번호</a>
            <input
              className="signUpPwdInput"
              type="password"
              onChange={this.pwdInput}
            ></input>
          </div>
          <div className="signUpPwdRepeat">
            <a className="signUpPwdTextRepeat">비밀번호 재확인</a>
            <input
              className="signUpPwdCheck"
              type="password"
              onChange={this.pwdCheck}
              onBlur={this.handleEqualPwd}
            ></input>
            <span className={this.state.notEqual ? 'isEqual' : 'equal'}>
              비밀번호가 일치하지 않습니다
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
            <span className={this.state.nameCheck ? 'nameLong' : 'nameShort'}>
              필수정보입니다
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
            <span className={this.state.yrCheck ? 'yrShort' : 'yrLong'}>
              태어난 년도 4자리를 정확하게 입력하세요
            </span>
            <select name="month">
              <option value="Mon">월</option>
              <option value="Jan">1</option>
              <option value="Feb">2</option>
              <option value="Mar">3</option>
              <option value="Apri">4</option>
              <option value="May">5</option>
              <option value="June">6</option>
              <option value="July">7</option>
              <option value="Aug">8</option>
              <option value="Sep">9</option>
              <option value="Oct">10</option>
              <option value="Nov">11</option>
              <option value="Dec">12</option>
            </select>
            <input className="bDayDay" type="text" placeholder="일"></input>
          </div>
          <div className="signUpSex">
            <a className="signUpSexText">성별</a>
            <select name="sexSelectBox">
              <option value="gender">성별</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
              <option value="notApplicable">선택안함</option>
            </select>
          </div>
          <div className="signUpEmail">
            <div className="signUpemailText">
              <a className="signUpEmailText">본인 확인 이메일</a>
              <a className="signUpEmailTextOption">(선택)</a>
            </div>
            <input className="signUpEmailInput" placeholder="선택입력"></input>
          </div>
          <div className="phoneNumber">
            <a className="phoneNumberText">휴대전화</a>
            <input
              className="phoneNumberInput"
              placeholder="전화번호 입력"
            ></input>
          </div>
          <div className="signInBtnDiv">
            <button className="signInBtn">로그인</button>
          </div>
        </main>
        <footer></footer>
      </>
    );
  }
}

export default SignUp;
