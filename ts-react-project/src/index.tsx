import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import Counter from './Counter';

const App: React.FC = () => (
  <div>
    <Greeting name="Alice" />
    <Counter />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
