import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tooltip from '../Tooltip';
import deleteIcon from '../../static/img/delete-icon.svg';
import editIcon from '../../static/img/edit-icon.svg';

const ListItemDaily = styled.li`
  height:336px;
  padding:0 28px;
`;
const DivDailyPensu = styled.div`
  position:relative;
`;
const DivDate = styled.div`
  position:relative;
  border-bottom: 1px solid rgba(43, 48, 57, 0.29);
  padding-bottom:14px;
`;
const DivButtonSet = styled.div`
  position:absolute;
  right:0;
  top: -50%;
  transform: translateY(50%);
`;
const ButtonDaily = styled.button`
  width:24px;
  height:24px;
  border:0;
  margin-left:20px;
  background-color:transparent;
  background: url(${props => props.bgUrl  || ''});
`;
const SpanButton = styled.span`
  visibility:hidden
`;
function Daily({moodMsg, type, date}) {
  return (
    <ListItemDaily>
      <DivDailyPensu>
      <div>{type}</div>
      <Tooltip property={{msg:'펭-하!', top:'10px', right:'10px'}}/>
      </DivDailyPensu>
      <DivDate>
        {date}
        <DivButtonSet>
          <ButtonDaily bgUrl={deleteIcon}>
            <SpanButton>삭제</SpanButton>
          </ButtonDaily>
          <ButtonDaily bgUrl={editIcon}>
            <SpanButton>수정</SpanButton>
          </ButtonDaily>
        </DivButtonSet>
      </DivDate>
    </ListItemDaily>
  );
}

export default Daily;
