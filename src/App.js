import React, { useState } from 'react';
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext();
function App() {

  const [theme, setTheme] = useState('red');

  console.log('Render App');


  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <Counter initialCount={0} />
      <CounterHooks initialCount={2} />

      <button onClick={() =>
        setTheme((prevTheme) => {
        return prevTheme === 'red' ? 'blue' : 'red';
      })}>
        Toggle Theme
      </button>

    </ThemeContext.Provider>
  );
}

export default App;
