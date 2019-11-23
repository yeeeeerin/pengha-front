import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import deleteIcon from '../../static/img/delete-icon.svg';
import editIcon from '../../static/img/edit-icon.svg';
import Tooltip from '../Tooltip';
import Mood from '../../common/Mood';

const ListItemDaily = styled.li`
  padding:0 28px;
  margin-bottom:64px;
`;
const DivDailyPensu = styled.div`
  position:relative;
  text-align:center;
`;
const DivDate = styled.div`
  position:relative;
  border-bottom: 1px solid rgba(43, 48, 57, 0.29);
  padding:33px 0 14px 0;

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
function Daily({daily, onDelete}) {
  const {id,moodMsg,type,date} = daily;
  return (
    <ListItemDaily>
      <DivDailyPensu>
        <Mood size='big' type={type}/>
        <Tooltip property={{msg:moodMsg, width:'80%', top:'-20px', right:'10%', triangleLeft:'60%'}}/>
      </DivDailyPensu>
      <DivDate>
        {date}
        <DivButtonSet>
          <ButtonDaily bgUrl={deleteIcon}
            onClick={_=>onDelete(id)}
          >
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
