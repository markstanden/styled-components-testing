/*
 * Import Dependancies
 */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

/*
 *Import Components
 */
import Home from './pages/Home';
import Login from './pages/login/Login';

/*
 * type definitions / interfaces
 */

const GlobalStyle = createGlobalStyle`
body {
  min-height: 100vh;
  margin: 0;
  color: black;
  font-family: 'Kaushan Script';
}

`;

/** App component tooltip */
const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
