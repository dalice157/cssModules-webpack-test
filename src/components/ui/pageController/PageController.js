import React, { Component } from 'react';
import controller from './PageController.css'

class PageController extends Component {

  render() {
    return (
      <React.Fragment>
        <ul className={controller.pageController}>
          <li className={controller.on}>aaa</li>
          <li>bbb</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default PageController;
