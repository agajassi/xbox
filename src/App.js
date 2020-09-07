import React,{Component} from "react";
import ReactDOM from "react-dom";
import './App.css';

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://vidtech.cbsinteractive.com/cvp/0.12.0/cvp.all.min.js";
    this.div.appendChild(script);
  }
  render() {
    return (
      <div className="App" ref={el => (this.div = el)}>
        <h1>Hello react</h1>
        {/* Script is inserted here */
          console.log('AGAJAN')
        }
      </div>
    );
  }
}

export default App;
