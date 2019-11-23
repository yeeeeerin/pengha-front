import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './main/Main';
import Login from './components/Login/Login';

const App = () => {
  return (
    <Wrapper >
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
        {/* <Route exact path="/" component={Main} /> */}
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  background:#FBF5EF;
`

