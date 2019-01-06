import React, { Component } from 'react';
import './App.css';
import LearningProps from './aulas/learning-props';
import HtmlAttributes from './aulas/html-attributes';
import GetDefaultProps from './aulas/getDefaultProps';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Renderização de todas as aulas</h1>
        <LearningProps name="Learning props - Isso é uma props" />
        <HtmlAttributes />
        <GetDefaultProps />
      </div>
    )
  }
}



export default App;

// function renderRodrigo() {
//   console.log("Exportando uma função especifica do modulo ou componente");
// }
// export { renderRodrigo }; //Exportando uma função especifica do modulo ou componente. Repare que está sem o 'default'
