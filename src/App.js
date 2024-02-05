import logo from './logo.svg';
import './App.css';
import GG from './GG';
import Ccomp from './Ccomp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GG name="fdf"/>

        <Ccomp />
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          bobik
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Timur
        </a>
      </header>
    </div>
  );
}

export default App;
