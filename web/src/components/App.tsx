/*
 * Import Dependancies
 */
import React, {
  FunctionComponent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

/*
 *Import Components
 */
import Home from './pages/Home';
import Login from './pages/login/Login';

import { lightTheme } from './themes/lightTheme';
import { darkTheme } from './themes/darkTheme';
import { themeID } from './themes/themeID';
import { MyThemeProps } from './themes/MyThemeProps';

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

interface AppState {
  theme: MyThemeProps;
}

/** App component tooltip */
const App: FunctionComponent = () => {
  const [theme, setTheme]: [
    MyThemeProps,
    Dispatch<SetStateAction<MyThemeProps>>
  ] = useState(lightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        switchTheme: () => {
          setTheme(prevState => {
            return prevState.ID === themeID.light ? darkTheme : lightTheme;
          });
        },
      }}
    >
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
    </ThemeProvider>
  );
};

export default App;
