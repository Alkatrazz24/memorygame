import React from 'react'
import logo from './logo.svg';
import './App.css';
import Board from './Board.js';
import Score from './score.js'
import Login from './login.js'

class App extends React.Component {

  refreshPage() {
    window.location.reload();
  }
  render(){ 
    return (
      <div className="App">
        <header className="App-header">
        <Login/>
          <p>
            Memarmy
          </p>
        </header>
        <body>
        <Board />

        <div>
        <button onClick={()=>this.refreshPage(true)}>refresh!</button>
        </div>
        </body>
      </div>
      
    );
  }
}
export default App;
