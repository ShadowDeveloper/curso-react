import React, { Component } from 'react';
import './App.css';
import LearningProps from './aulas/learning-props';
import HtmlAttributes from './aulas/html-attributes';
import GetDefaultProps from './aulas/getDefaultProps';
import PropKey from './aulas/prop-key';
import ButtonChildren from './aulas/buttonChildren';


class App extends Component {
  render() {
    return (
      <div className="main-container">
        <h1>Renderização de todas as aulas</h1>
        <LearningProps name="Learning props - Isso é uma props" />
        <HtmlAttributes onClick={function (e) {
          console.log(e);
        }} />
        <GetDefaultProps />
        {['blue', 'red', 'yellow'].map((square, index) => (
          <PropKey key={index} color={square} />
        )) // Método com arrow function
          // ['blue', 'red', 'yellow'].map(function (square) {
          //   return <KeySquare color={square} />
          // }) //Método com function normal, necessita de um return
        }

        <ButtonChildren><span>Rodrigo</span> Botão</ButtonChildren>

      </div>
    )
  }
}



export default App;

// function renderRodrigo() {
//   console.log("Exportando uma função especifica do modulo ou componente");
// }
// export { renderRodrigo }; //Exportando uma função especifica do modulo ou componente. Repare que está sem o 'default'
