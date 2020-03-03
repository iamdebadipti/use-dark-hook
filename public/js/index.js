import React from 'react';
import ReactDOM from 'react-dom';

// styles
import '../css/normalize.css';
import '../css/main.css';

// use-dark-hook
import { useDarkHook } from '../../build/use-dark-hook';

const App = () => {
  const [mode, toggleMode] = useDarkHook();

  return (
    <div className="main_container">
      <h1>Hello "use-dark-hook"</h1>
      <h2>Current Mode: {mode}</h2>
      <button onClick={() => toggleMode()} className={`${mode}_cta`}>
        toggle mode
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
