import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Ler o conteúdo do course', 'Assistir a aula ao vivo', 'Fazer os exercícios do dia'];

class App extends React.Component {
  render() {
    return compromissos.map((compromisso) => Task(compromisso));
  };
}

export default App;
