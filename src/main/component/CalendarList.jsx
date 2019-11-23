import React from "react";
import styled from "styled-components";

const CalendarList = (props) => {
  return <UlLayout>{props.children}</UlLayout>;
}

export default CalendarList;

const UlLayout = styled.ul`
   position: absolute;
  list-style: none;
  top:108px;
  width:100%;
  height:100%;
  padding:0;
  margin:0;
  background : #fff;
  overflow-x: hidden;
  overflow-y:scroll;
  display: inline-block;

  align-items: center;

`;