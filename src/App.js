import logo from "./logo.svg";
import "./App.css";

const list1 = (
  <>
    <li>Яблоко</li>
    <li>Груша</li>
    <li>Киви</li>
  </>
);

const list2 = (
  <>
    <li>Яблоко</li>
    <li>Груша</li>
    <li>Малина</li>
  </>
);

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
