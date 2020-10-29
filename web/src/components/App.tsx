/*
 * Import Dependancies
 */
import React from 'react';

/*
 *Import App Component Stylesheet
 */
//import './App.css';

/*
 *Import Components
 */
import { Button } from './common/Button';

/*
 * type definitions / interfaces
 */

/** App component tooltip */
class App extends React.Component {
  render() {
    return (
      <div className="App-header">
        <h1 className="App-header-main">The Super Amazing Mega-App</h1>
        <h4 className="App-header-sub">maybe...</h4>

        <Button>Click Me</Button>
      </div>
    );
  }
}

export default App;
