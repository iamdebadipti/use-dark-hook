import React from 'react';
import ReactDOM from 'react-dom';

// styles
import '../css/normalize.css';
import '../css/main.css';

// components
import MainContainer from './MainContainer';

const App = () => {
  return (
    <MainContainer>
      <h1>hello</h1>
    </MainContainer>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
