import React, { Component } from 'react'


class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:"",
      email:"",
      cpf:"",
      address:"",
      city: "",
      estado:"",
      tipo:""
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    let finalValue = value
    if (name === "name") {
      finalValue = value.toUpperCase()
    } else if (name === "address") {
      
      finalValue = value.normalize("NFD")
      console.log(finalValue)
    }
    this.setState(() => ({
      [name]:finalValue
    }))
  }
  render() {
    return(
      <form>
        <fieldset>
          <h1>Dados pessoais:</h1>
          <label>
            Nome:
            <input
              value={this.state.name}
              type="text"
              maxLength="40"
              name="name"
              required="true"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              value={this.state.email}
              type="text"
              maxLength="50"
              name="email"
              required="true"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            CPF:
            <input
              value={this.state.cpf}
              type="text"
              maxLength="11"
              name="cpf"
              required="true"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Endereço:
            <input
              value={this.state.address}
              type="text"
              maxLength="200"
              name="address"
              required="true"
              onChange={this.handleChange}
            />
          </label>

        </fieldset>
      </form>
    )
  }
}

export default Form;
