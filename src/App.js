import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Navi from './components/Navi'
import Projects from './components/Projects'
import LoginForm from './components/LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useRef } from "react";

function App() {
  const resultRef = useRef(null);
  const meRef = useRef(null);
  // const themeRef = useRef(null);

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };


  return (
    // <div className="App" bg="dark" data-bs-theme="dark">
    <div className={`App ${theme}`} bg="dark" data-bs-theme="dark">
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
      <Navi resultRef={resultRef} meRef={meRef} toggleTheme={toggleTheme} theme={theme}/>
      <Greet ref={meRef}/>
      <Projects ref={resultRef} theme={theme}/>
      <footer style={{fontSize: "10px"}}>
      This page is created using ReactJS
      </footer>
    </div>
  );
}

export default App;
