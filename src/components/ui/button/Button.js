import React, { Component } from 'react';
import btn from './Button.css'

class Button extends Component {
  renderBtn(typeStyle) {
		switch(typeStyle){
			case "default":
				return btn.btnDefault; 
			default:
				return;
		}
  }
  
  render() {
    const {typeStyle, children} = this.props;
    return (
      <React.Fragment>
        <button className={`${btn.btn} ${this.renderBtn(typeStyle)}`}>
        {children}
        </button>
      </React.Fragment>
    );
  }
}

export default Button;
