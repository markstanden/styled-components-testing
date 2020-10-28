/*
 * Import Dependancies
 */
import React from 'react';

/*
 *Import App Component Stylesheet
 */
import './App.css';

/*
 *Import Components
 */

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
      </div>
    );
  }
}

export default App;
