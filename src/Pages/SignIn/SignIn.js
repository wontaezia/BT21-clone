import React, { Component } from 'react';
import './SignIn.scss';
import Dropdown, { Selection } from 'react-dropdown-now';
import 'react-dropdown/style.css';
import { API } from '../../config';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      passwordValue: '',
      staySignIn: false,
      ipSecurity: false,
      currentLanguage: '한국어',
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
    fetch(`${API}/user/signin`, {
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
    const { currentLanguage } = this.state;
    let signInLanguage;
    if (currentLanguage === '한국어') {
      signInLanguage = '로그인';
    } else if (currentLanguage === 'English') {
      signInLanguage = 'Login';
    } else if (currentLanguage === '中文') {
      signInLanguage = '登录';
    }

    let signInId;
    if (currentLanguage === '한국어') {
      signInId = '   아이디';
    } else if (currentLanguage === 'English') {
      signInId = '   ID';
    } else if (currentLanguage === '中文') {
      signInId = '   ID';
    }

    let signInPwd;
    if (currentLanguage === '한국어') {
      signInPwd = '   비밀번호';
    } else if (currentLanguage === 'English') {
      signInPwd = '   Password';
    } else if (currentLanguage === '中文') {
      signInPwd = '    密码';
    }

    let continueSignIn;
    if (currentLanguage === '한국어') {
      continueSignIn = '로그인 상태 유지';
    } else if (currentLanguage === 'English') {
      continueSignIn = 'Stay Signed In';
    } else if (currentLanguage === '中文') {
      continueSignIn = '维持登录状态';
    }

    let secureSignIn;
    if (currentLanguage === '한국어') {
      secureSignIn = 'IP 보안';
    } else if (currentLanguage === 'English') {
      secureSignIn = 'IP Secured';
    } else if (currentLanguage === '中文') {
      secureSignIn = 'IP 保护';
    }

    return (
      <main>
        <div className="mainContainer">
          <nav>
            <Dropdown
              className="selectLanguage"
              placeholder="한국어"
              options={['한국어', 'English', '中文']}
              value="one"
              onChange={(e) => {
                this.setState({
                  currentLanguage: e.value,
                });
                console.log(e.value);
              }}
            />
          </nav>
          <content>
            <div className="signInLogoBorder">
              <img className="signInLogo" />
            </div>
            <div className="signInInput">
              <input
                className={
                  this.state.idValue
                    ? 'signInIdInput isActive'
                    : 'signInIdInput'
                }
                type="text"
                placeholder={signInId}
                onKeyUp={this.colorIdChange}
              />
              <input
                className={
                  this.state.passwordValue
                    ? 'signInPwdInput isActive'
                    : 'signInPwdInput'
                }
                type="password"
                placeholder={signInPwd}
                onKeyUp={this.colorPasswordChange}
              />
            </div>
            <button
              className="signInBtn"
              onClick={() => {
                this.handleClick();
              }}
            >
              {signInLanguage}
            </button>
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
                <p className="signInStayText">{continueSignIn}</p>
              </div>
              <div className="ipSecurity">
                <p className="ipSecurityText">{secureSignIn}</p>
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
            <div className="externalLinks">
              <div className="findId">아이디 찾기 </div>
              <div className="findPwd"> | 비밀번호 찾기 | </div>
              <div className="goToSignUp"> 회원가입</div>
            </div>
          </content>
        </div>
      </main>
    );
  }
}

export default SignIn;
