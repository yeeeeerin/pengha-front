import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './main/Main';
import Save from './save/Save';

const App = () => {
  return (
    <Wrapper >
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/save/:id" component={Save} />
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

