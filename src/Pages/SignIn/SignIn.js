import React, { Component } from 'react';
import './SignIn.scss';
import Dropdown, { Selection } from 'react-dropdown-now';
import 'react-dropdown/style.css';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      passwordValue: '',
      staySignIn: false,
      ipSecurity: false,
    };
  }

  colorIdChange = (event) => {
    this.setState({
      idValue: event.target.value,
    });
  };

  colorPasswordChange = (event) => {
    this.setState({
      passwordValue: event.target.value,
    });
  };

  staySignIn = () => {
    this.setState((state) => ({ staySignIn: !state.staySignIn }));
  };

  ipSecurity = () => {
    this.setState((secure) => ({ ipSecurity: !secure.ipSecurity }));
  };

  handleClick = () => {
    fetch('http://10.58.4.217:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.passwordValue,
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
    return (
      <main>
        <nav>
          <Dropdown
            className="selectLanguage"
            placeholder="한국어"
            options={['한국어', 'English', '中文']}
            value="one"
            onChange={(value) => console.log('change!', value)}
            onSelect={(value) => console.log('selected!', value)}
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
              className={
                this.state.idValue ? 'signInIdInput isActive' : 'signInIdInput'
              }
              type="text"
              placeholder="   아이디"
              onKeyUp={this.colorIdChange}
            />
            <input
              className={
                this.state.passwordValue
                  ? 'signInPwdInput isActive'
                  : 'signInPwdInput'
              }
              type="password"
              placeholder="   비밀번호"
              onKeyUp={this.colorPasswordChange}
            />
          </div>
          <button className="signInBtn">로그인</button>
          <div className="signInOption">
            <div className="signInStayBtn">
              <div
                className={
                  this.state.staySignIn
                    ? 'signInStayCheck isSignIn'
                    : 'signInStayCheck'
                }
                onClick={this.staySignIn}
              ></div>
              <p class="signInStayText">로그인 상태 유지</p>
            </div>
            <div className="ipSecurity">
              <p className="ipSecurityText">IP 보안</p>
              <div
                className={
                  this.state.ipSecurity
                    ? 'securityOnOff check'
                    : 'securityOnOff'
                }
                onClick={this.ipSecurity}
              ></div>
            </div>
          </div>
        </content>
      </main>
    );
  }
}

export default SignIn;
