import React from 'react';
import styled from 'styled-components';
import triagle from '../static/img/triangle.svg';

const TooltipPengsu = styled.div`
  position:absolute;
  top:${props => props.props.top  || '0'}
  right:${props => props.props.right || '0'};
  box-sizing:border-box;
  background:#2b3039;
  color:#fff;
  font-size:14px;
  border-radius:5px;
  padding:11px 27px;
`;
const TooltipTriangle = styled.img`
  position:absolute;
  top: 38px;
  left: 20px;
  width: 17px;
`;

function Tooltip({property}) {
  return(
    <TooltipPengsu props={property}>
      {property.msg}
      <TooltipTriangle src={triagle} alt="말풍선을 위한 삼각형"/>
    </TooltipPengsu>
  )
}

export default Tooltip;