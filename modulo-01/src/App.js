import React, { Component } from 'react';
import './App.css';
import LearningProps from './aulas/learning-props';
import HtmlAttributes from './aulas/html-attributes';
import GetDefaultProps from './aulas/getDefaultProps';




class Title extends Component {
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



export default Title;

// function renderRodrigo() {
//   console.log("Exportando uma função especifica do modulo ou componente");
// }
// export { renderRodrigo }; //Exportando uma função especifica do modulo ou componente. Repare que está sem o 'default'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
