import React, { Component } from 'react';
import './SignUp.scss';

class SignUp extends Component {
  render() {
    return (
      <>
        <div className="signUpLogoBorder">
          <img className="signUpLogo"></img>
        </div>
        <content>
          <div className="signUpId">
            <a className="signUpIdText">아이디</a>
            <input
              className="signUpIdInput"
              type="text"
              placeholder="아이디를 입력하세요"
            ></input>
          </div>
          <div className="signUpPwd">
            <a className="signUpPwdText">비밀번호</a>
            <input
              className="signUpPwdInput"
              type="password"
              placeholder="비밀번호를 입력하세요"
            ></input>
          </div>
          <div className="signUpPwdRepeat">
            <a className="signUpPwdTextRepeat">비밀번호 재확인</a>
            <input
              className="signUpPwdCheck"
              type="password"
              placeholder="비밀번호를 다시 입력하세요"
            ></input>
          </div>
          <div className="signUpName">
            <a className="signUpNameText">이름</a>
            <input
              className="signUpNameInput"
              type="password"
              placeholder="이름 다시 입력하세요"
            ></input>
          </div>
          <div className="signUpBday">
            <a classname="signUpBdayText"></a>
            <input
              className="bDayYr"
              type="text"
              placeholder="년 (4자)"
            ></input>
            <select name="month">
              <option value="Mon">월</option>
              <option value="Jan">1</option>
              <option value="Feb">2</option>
              <option value="Mar">3</option>
              <option value="Apri">4</option>
              <option value="Apri">5</option>
              <option value="Apri">6</option>
              <option value="Apri">7</option>
              <option value="Apri">8</option>
              <option value="Apri">9</option>
              <option value="Apri">10</option>
              <option value="Apri">11</option>
              <option value="Apri">12</option>
            </select>
            <input className="bDayDay" type="text" placeholder="일"></input>
          </div>
          <div className="signUpSex">
            <a className="signUpSexText">성별</a>
            <select name="sex">
              <option value="gender">성별</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
              <option value="notApplicable">선택안함</option>
            </select>
          </div>
        </content>
      </>
    );
  }
}

export default SignUp;
