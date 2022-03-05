import React from 'react';
import { Modal } from 'antd';
import axios from 'axios';
import logo from './logo.svg';

import 'antd/dist/antd.css';
import './App.css';


class App extends React.Component {
  componentDidMount() {
    Modal.info({
      title: 'aaa',
      content: 'aaa'
    })


    axios.post('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth', {
      name: 'x',
      // email: '347394153m'
    }).then(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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

}

export default App;
