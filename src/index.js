import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Player from './components/Player';
import Panel from './components/Panel';
import * as serviceWorker from './serviceWorker';

window.$player = null;

ReactDOM.render(
  <React.StrictMode>
    <Player />
    <Panel />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
