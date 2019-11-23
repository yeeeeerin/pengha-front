import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Daily from './Daily'
import Header from '../../common/Header';

const initState = [
  { id:1, moodMsg:'팀장님한테 쪼인트 맞았다 쒸익', type:'angry', date:'2019년 11월 19일 화'},
  { id:2, moodMsg:'팀장님이 휴가를 갔다 야호', type:'happy', date:'2019년 11월 20일 수'},
  { id:3, moodMsg:'또 떨어졌다...언젠간 붙겠지? 내 로또', type:'sad', date:'2019년 11월 21일 목'},
  { id:4, moodMsg:'와 당첨됐다 로또! 20억의 기적', type:'best', date:'2019년 11월 22일 금'},
  { id:5, moodMsg:'그런데 저번주 로또였다...?!', type:'embarrassed', date:'2019년 11월 23일 토'},
  { id:6, moodMsg:'당첨된 줄 알았는데... 혼자 있을래', type:'lonely', date:'2019년 11월 23일 토'},
  { id:7, moodMsg:'이생망은 그저 즐길 뿐 FLEX', type:'flex', date:'2019년 11월 23일 토'},
  { id:8, moodMsg:'월급나왔다 둠칫둠칫~😁', type:'good', date:'2019년 11월 23일 토'},
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
