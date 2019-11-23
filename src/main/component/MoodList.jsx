import React from "react";
import styled from "styled-components";

const MoodList = (props) => {
    return <UlLayout>{props.children}</UlLayout>;
}

export default MoodList;

const UlLayout = styled.div`
  position: relative;
  list-style: none;
  padding: 0;
  top:45px;
  width:100%;
  height:100%;
  overflow-y: scroll;
  overflow-x:hidden;
  display: inline-block;
  white-space: nowrap;
`;