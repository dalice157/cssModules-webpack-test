import React, { Component } from 'react';
import app from './App.css'
import Button from 'ui/button/Button'
import Select from 'ui/select/Select'
import PageController from 'ui/pageController/PageController'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <PageController />
        </div>
        <div>
        <Button typeStyle="default">Click Me!!</Button>
        <Select />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
