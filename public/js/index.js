import React from 'react';
import ReactDOM from 'react-dom';

// styles
import '../css/normalize.css';
import '../css/main.css';

// components
import MainContainer from './MainContainer';

// use-dark-hook
import { useDarkHook } from '../../src/index';

const App = () => {
  const [mode, toggleMode] = useDarkHook('dark');

  return (
    <MainContainer>
      <h1>Hello "use-dark-hook"</h1>
      <h2>Current Mode: {mode}</h2>
      <button onClick={() => toggleMode()}>toggle mode</button>
    </MainContainer>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
