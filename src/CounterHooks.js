import React, { useState } from 'react'
import { ThemeContext } from './App';

export default function CounterHooks({initialCount}) {

  const [count, setCount] = useState(initialCount);

  const onClick = (amount) => {
    setCount((prevCount) => prevCount + amount)
  };

  return (
    <ThemeContext.Consumer>
      {
        (style) => (
        <div>
          <button className="btn" onClick={() => onClick(-1)} style={style}>
          -
          </button>
            <span>
              {count}
            </span>
          <button onClick={() => onClick(1)} style={style}>
          +
          </button>
        </div>
        )
      }
    </ThemeContext.Consumer>
  )
}
