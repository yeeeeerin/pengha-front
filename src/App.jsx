import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './main/Main';
import Save from './save/Save';
import LoginContainer from './components/Login/LoginContainer';
import DailyList from './components/Daily/DailyList';

const App = () => {
  return (
    <Wrapper >
      <Router>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/save/:id" component={Save} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/dailylist" component={DailyList} />
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position:absolute;
  width:100%;
  height:100%;
`

