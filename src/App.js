import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Fibonacci from './components/fibonacci';
import LinFib from './components/linear';

class App extends Component {
  render() {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <LinFib />
                <Fibonacci />
            </div>
        </div>
    );
  }
}

export default App;
