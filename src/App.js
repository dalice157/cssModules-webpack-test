import React, { Component } from 'react';
import app from './App.css'
import Button from 'ui/button/Button'
import Select from 'ui/select/Select'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
        <Button typeStyle="default">Click Me!!</Button>
        <Select />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
