// import logo from './logo.svg';
import './App.css';
import AboutSection from './Components/AboutSection/AboutSection';
import HeroPage from './Components/HeroPage/HeroPage';
import NavigationBar from './Components/NavigationBar/Navigation';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <HeroPage/>
      <AboutSection/>
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
    </div>
  );
}

export default App;
