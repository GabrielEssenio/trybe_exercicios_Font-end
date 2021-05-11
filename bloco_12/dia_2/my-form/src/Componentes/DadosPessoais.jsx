import React, { Component } from 'react'

class DadosPessoais extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
    }
  }

  handleOnChange = ({ target }) => {
    const { name, value } = target
    this.setState(
      // if target.type === "checkbox"?target.checked: target.value;
      { [name]: value })
  }

  handleSubmit = () => {

  }

  render() {
    const { name, email, cpf, endereço, cidade } = this.state
    return (
      <fieldset>
        <label>Name
              <input type="text" name="name" value={name} onChange={this.handleOnChange} />
        </label>
        <label>Email
              <input type="text" name="email" value={email} onChange={this.handleOnChange} />
        </label>
        <label>CPF
              <input type="text" name="cpf" value={cpf} onChange={this.handleOnChange} />
        </label>
        <label>Endereço
              <input type="text" name="endereço" value={endereço} onChange={this.handleOnChange} />
        </label>
        <label>Cidade
              <input type="text" name="cidade" value={cidade} onChange={this.handleOnChange} />
        </label>
        <label>Estado
              <input type="" name="cidade" value={cidade} onChange={this.handleOnChange} />
        </label>
        <div>
          <button type="button" onClick={this.handleSubmit}>Click</button>
        </div>
      </fieldset>
    )
  }
}

export default DadosPessoais