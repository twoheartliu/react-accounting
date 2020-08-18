import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NotFound from './views/NotFound';
import styled from 'styled-components';
import {Tag} from './views/Tag';

const AppWrapper = styled.div`
  color: #333;
  max-width: 800px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/tags" exact>
            <Tags/>
          </Route>
          <Route path="/tags/:id" exact>
            <Tag/>
          </Route>
          <Route path="/money" exact>
            <Money/>
          </Route>
          <Route path="/statistics" exact>
            <Statistics/>
          </Route>
          <Redirect exact from='/' to='/money'/>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
