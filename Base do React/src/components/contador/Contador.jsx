import React, { Component } from "react";
import Display from "./Display";
import Botao from "./Botao";
import ValueForm from "./ValueForm";

import "./Contador.css";

class Contador extends Component {
  state = {
    numero: 0,
    valor: 1,
  };

  increment = () => {
    this.setState({
      numero: this.state.numero + this.state.valor,
    });
  };

  decrement = () => {
    this.setState({
      numero: this.state.numero - this.state.valor,
    });
  };

  setValor = (valor) => {
    this.setState({
      valor: valor,
    });
  };

  render() {
    return (
      <div className="contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <ValueForm valor={this.state.valor} setValor={this.setValor} />
        <Botao increment={this.increment} decrement={this.decrement} />
      </div>
    );
  }
}

export default Contador;
