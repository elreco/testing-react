import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <h2>Magali Joseph</h2>
        <h3>Test</h3>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
