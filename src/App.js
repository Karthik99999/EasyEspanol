import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <div id = "center">
            <div id = "outer">
              <iframe id = "theFrame" frameborder = "0" scrolling = "no" src = ""></iframe>
              <div id="next" onclick = "next()">
                <span class = "glyphicon glyphicon-chevron-right"></span>
              </div>
            </div>
          </div>

          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
