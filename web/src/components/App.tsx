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

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  // DefaultTheme is empty by default, so we can add properties here or add from the MyThemeProps.ts file.\
  export interface DefaultTheme extends MyThemeProps {
    switchTheme: () => void;
  }
}

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
  background: ${p => p.theme.bodyBackgroundColor};
  min-height: 100vh;
  margin: 0;
  color: ${p => p.theme.bodyFontColor};
  font-family: 'Kaushan Script';

}

`;
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
          return setTheme(prevState => {
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
