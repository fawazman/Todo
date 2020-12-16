// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ToDo from "./containers/todoContainer";
function App() {
  
  return (
    <div className="App">
      <div>
        <h2>Todo App</h2>
      </div>
      <div>
        <ToDo />
      </div>
      {/* <header onClick={()=>setFawaz(true)} className="App-header">
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
