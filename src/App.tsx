import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from 'components/Nav';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column nowrap;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags/>
            </Route>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            {/*<Route exact path="/">*/}
            {/*  <Money />*/}
            {/*</Route>*/}
            <Redirect exact from='/' to='/money'/>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

export default App;

function Statistics() {
  return <h2>Statistics</h2>;
}

function Tags() {
  return <h2>Tags</h2>;
}

function Money() {
  return <h2>Money</h2>;
}

function NotFound() {
  return <h2>NOT FOUND</h2>;
}