import React,{Component} from "react";
import ReactDOM from "react-dom";
import './App.css';

class App extends Component {
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
