import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Daily from './Daily'

const initState = [
  { moodMsg:'열다섯자열다섯자열다섯자열다섯자', type:'angry', date:'2019년 11월 19일 화'},
  { moodMsg:'열다섯자열다섯자열다섯자열다섯자', type:'happy', date:'2019년 11월 20일 수'},
  { moodMsg:'열다섯자열다섯자열다섯자열다섯자', type:'sad', date:'2019년 11월 21일 목'},
  { moodMsg:'열다섯자열다섯자열다섯자열다섯자', type:'happy', date:'2019년 11월 22일 금'},
  { moodMsg:'열다섯자열다섯자열다섯자열다섯자', type:'fun', date:'2019년 11월 23일 토'},
]

function DailyList({dailyList}) {
  return (
    <ul>
      {/* initState는 상위컴포넌트에서 dailyList로 받아와서 바꿔줘야 함 */}
      {initState.map(daily => (
        <Daily
          moodMsg={daily.moodMsg}
          type={daily.type}
          date={daily.date}
        />
      ))}
    </ul>
  );
}

export default DailyList;
