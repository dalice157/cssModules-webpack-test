import React, { Component } from 'react';
import Button from 'ui/button/Button'
import Select from 'ui/select/Select'
import PageController from 'ui/pageController/PageController'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PageController />
        <Button typeStyle="default">Click Me!!</Button>
        <Select />
      </React.Fragment>
    );
  }
}

export default App;
