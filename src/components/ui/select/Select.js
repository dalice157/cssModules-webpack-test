import React, { Component } from 'react';
import select from './Select.css'

class Select extends Component {
  render() {
    return (
      <React.Fragment>
				<select name="aa" className={`${select.select} ${select.selectPramie}`}>
					{/* 當有很多個className的寫法 */}
					<option value="0" className={select.option}>0</option>{/* 單一className的寫法 */}
				</select>
			</React.Fragment>
    );
  }
}

export default Select;
