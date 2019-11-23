import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { KakaoAppKey } from '../../config';
import axios from 'axios';
import kakaoLogo from '../../static/img/kakao-login.svg'
import { join } from 'path';

const LoginButton = styled.div`
  width:80%;
  position:absolute;
  bottom:60px;
  transform: translateX(-50%);
  left:50%;
`;
const ButtonKakao = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 2px;
  border: 0;
  background-color: #fff036;
  font-size:15px;
  &:focus {
    outline:none
  }
`;
const SpanKakao = styled.span`
  vertical-align:middle;
`;
const ImgKakao = styled.img`
  vertical-align:middle;
  margin-right:12px;
`;

function Login() {
  // const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
    // console.log('컴포넌트가 화면에 나타남');
    window.Kakao.init(KakaoAppKey);
    let accessToken;
    if(!!localStorage.getItem('accessToken')){
      accessToken = localStorage.getItem('accessToken');
      login(accessToken);
    }
    return () => {
      // console.log('컴포넌트가 화면에서 사라지고 실행할 내용');
    };
  }, []);

  const login = accessToken => {
    const API = 'http://pengha.yonghochoi.com/login';
    axios.get(API, {
      headers: {
        'Content-Type': `application/json`
      }
    }).then(res => {
      // handle success
      // 서버에 토큰 줄 예정
      console.log(res);
      localStorage.setItem('token','받아올 토큰');
      setIsLogin(true);
    })
    .catch(error => {
      // handle error
      console.log(error);
    })
  }
  const join = accessToken => {

  }

  // const auth = accessToken =>{
  //   const API = '';
  //   axios.get(API, {
  //     headers: {
  //       'Authorization': `Bearer ${accessToken}`
  //     }
  //   }).then(res => {
  //       // handle success
  //       // 서버에 토큰 줄 예정
  //       console.log(res);
  //       localStorage.setItem('token','받아올 토큰');
  //       setIsLogin(true);
  //     })
  //     .catch(error => {
  //       // handle error
  //       console.log(error);
  //     })
  // }
  const getMeKakao = (access_token) => {
    console.log('getMeKakao');
    const kAPI_GET_ME = 'https://kapi.kakao.com/v2/user/me';
        axios.POST(kAPI_GET_ME, {
          headers: {
            'Authorization': `Bearer ${access_token}`,
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        })
        .then(res => {
          // handle success
          console.log('res',res);
          // localStorage.setItem('token','받아올 토큰');
          // setIsLogin(true);
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
  }
  const kakaoLogin = () => {
    window.Kakao.Auth.login({
      success: function(authObj) {
        getMeKakao(authObj.access_token)
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      }
    });
  }
  return (
    <LoginButton>
      <ButtonKakao
        onClick={kakaoLogin}
        ><ImgKakao src={kakaoLogo} alt="카카오 로고"/>
      <SpanKakao >카카오 계정으로 로그인</SpanKakao>
      </ButtonKakao>
      { isLogin && <Redirect to="/main"/> }
    </LoginButton>
  );
}

export default Login;
