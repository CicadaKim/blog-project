import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Write from './Write';

let wfElement = document.getElementById('writeform');
let rootElement = document.getElementById('root');

ReactDOM.render(<App/>, rootElement);
ReactDom.render(<Write/>, wfElement);