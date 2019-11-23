import React from 'react';
import styled from 'styled-components';
import introImg from '../../static/img/intro-img.png';
import introImg2x from '../../static/img/intro-img@2x.png';
import introImg3x from '../../static/img/intro-img@3x.png';
import Login from './Login';
// import triagle from '../../static/img/triangle.svg';
import Tooltip from  '../Tooltip';

const H1Title = styled.h1`
  display:block;
  width:50%;
  text-align:center;
  margin:108px auto 87px auto;
`;
const DivPengsu = styled.div`
  position:relative;
  margin:0 auto;
  width: 60%
`;
// const TooltipPengsu = styled.div`
//   position:absolute;
//   top:-40px;
//   right:0;
//   width:88px;
//   box-sizing:border-box;
//   background:#2b3039;
//   color:#fff;
//   font-size:14px;
//   border-radius:5px
//   padding:11px 27px
//   &:before{
//     content:'펭-하';
//   }
// `;
// const TooltipTriangle = styled.img`
//   position:absolute;
//   top: 38px;
//   left: 20px;
//   width: 17px;
// `;
const ImgPengsu = styled.img`
  display:inline-block;
  width:100%;
  object-fit: contain;
`;
function LoginContainer() {
return(
  <>
    <H1Title>펭수의 하루</H1Title>
    <DivPengsu>
      <ImgPengsu
        src={introImg}
        srcSet={`
          ${introImg2x} 300w,
          ${introImg3x} 768w,
          `}
        alt="펭수 이미지">
      </ImgPengsu>
      {/* <TooltipPengsu>
        <TooltipTriangle src={triagle} alt="말풍선을 위한 삼각형"/>
      </TooltipPengsu> */}
      <Tooltip property={{msg:'펭-하!'}}/>
     </DivPengsu>
    <Login/>
  </>
)
}

export default LoginContainer;