import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
  height: 100vh;
  flex-flow: column nowrap;
`;

const Main = styled.div`
  border: 1px solid red;
  flex-grow: 1;
  overflow: auto;
`;

const Nav = styled.nav`
  border: 1px solid blue;
  > ul {  
    display: flex;
    > li {
      width: 33.33%;
      text-align: center;
      padding: 16px;
    }
  }
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
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </Nav>
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