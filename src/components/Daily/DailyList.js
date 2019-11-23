import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Daily from './Daily'
import Header from '../../common/Header';

const initState = [
  { id:1, moodMsg:'열다섯자열다섯자열다섯자열다섯자', type:'angry', date:'2019년 11월 19일 화'},
  { id:2, moodMsg:'열다섯자열다섯자열다섯자열다섯자', type:'happy', date:'2019년 11월 20일 수'},
  { id:3, moodMsg:'열다섯자열다섯자열다섯자열다섯자', type:'sad', date:'2019년 11월 21일 목'},
  { id:4, moodMsg:'열다섯자열다섯자열다섯자열다섯자', type:'best', date:'2019년 11월 22일 금'},
  { id:5, moodMsg:'열다섯자열다섯자열다섯자열다섯자', type:'embarrassed', date:'2019년 11월 23일 토'},
  { id:6, moodMsg:'열다섯자열다섯자열다섯자열다섯자', type:'lonely', date:'2019년 11월 23일 토'},
  { id:7, moodMsg:'열다섯자열다섯자열다섯자열다섯자', type:'flex', date:'2019년 11월 23일 토'},
  { id:8, moodMsg:'열다섯자열다섯자열다섯자열다섯자', type:'good', date:'2019년 11월 23일 토'},
]

const UlDailyList = styled.ul`
  margin-top:120px
`;

function DailyList({dailys}) {
  const [dailyList, setDailyLists] = useState(initState)
  
  useEffect(() => {
		// console.log('컴포넌트가 화면에 나타남');
		if(!!dailys){setDailyLists(dailys)}
    return () => {
      // console.log('컴포넌트가 화면에서 사라짐');
    };
  }, [dailys]);
  
  const onDelete=useCallback(id=>{
    // 삭제 API 연결 필요
    setDailyLists(dailyList.filter(daily=> daily.id !== id))
  }, [dailyList]);
  
  return (
    <>
      <Header/>
      <UlDailyList>
        {dailyList.map(daily => (
          <Daily
            key={daily.id}
            daily={daily}
            onDelete={onDelete}
          />
        ))}
      </UlDailyList>
    </>
  );
}

export default DailyList;
