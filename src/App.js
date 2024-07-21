import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';


function App() {
  // Function to toggle dark mode


// Example button to toggle dark mode
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

  return (
    <div className="App">
            <Card />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <button id="dark-mode-toggle">Toggle Dark Mode</button>

          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
