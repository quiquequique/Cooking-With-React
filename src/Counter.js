import React, { Component } from 'react'
import { ThemeContext } from './App';

export default class Counter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: props.initialCount,
    }
  }

  onClick = (amount) => {

    this.setState((prevState) => {
      return { count: prevState.count + amount }
    })
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {(style) =>(
        <div>
          <button className="btn" onClick={() => this.onClick(-1)} style={style}>
          -
          </button>
            <span>
              {
                this.state.count
              }
            </span>
          <button onClick={() => this.onClick(1)} style={style}>
          +
          </button>
        </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}
