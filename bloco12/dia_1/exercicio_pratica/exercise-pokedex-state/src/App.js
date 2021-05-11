// src/App.js
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  handleButtonOne() {
    console.log('"this" do botão 1 :', this);
  }


  handleButtonTwo() {
  console.log('"this" do botão 2 :', this);
}


handleButtonThree() {
  console.log('"this" do botão 3 :', this);
}
render() {
  return (
    <div>
      <button onClick={this.handleButtonOne}>Botão 1</button>
      <button onClick={this.handleButtonTwo}>Botão 2</button>
      <button onClick={this.handleButtonThree}>Botão 3</button>
    </div>
  );
}
    }

export default App;