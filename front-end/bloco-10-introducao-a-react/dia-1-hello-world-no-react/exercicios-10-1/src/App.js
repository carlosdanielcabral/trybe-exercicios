import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return Task("oi");
  };
}

export default App;
