import React, { Component } from 'react';
import './SignIn.scss';
import Dropdown, { Selection } from 'react-dropdown-now';

class SignIn extends Component {
  render() {
    return (
      <main>
        <nav>
          <Dropdown
            className="selectLanguage"
            placeholder="한국어"
            options={['한국어', 'English', '中文']}
            value="one"
            onChange={(value) => console.log('change!', value)}
            onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
            onClose={(closedBySelection) =>
              console.log('closedBySelection?:', closedBySelection)
            }
            onOpen={() => console.log('open!')}
          />
        </nav>
        <content>
          <div className="signInLogoBorder">
            <img className="signInLogo"></img>
          </div>
          <div className="signInInput">
            <input
              className="signInIdInput"
              type="text"
              placeholder="   아이디"
            />
            <input
              class="signInPwdInput"
              type="password"
              placeholder="   비밀번호"
            />
          </div>
          <button className="signInBtn">로그인</button>
          <div className="signInOption">
            <div className="signInStayBtn">
              <img className="signInStayCheck"></img>
              <span>로그인 상태 유지</span>
            </div>
            <div className="ipSecurity">
              <span>IP 보안</span>
              <img className="securityOnOff"></img>
            </div>
          </div>
        </content>
      </main>
    );
  }
}

export default SignIn;
