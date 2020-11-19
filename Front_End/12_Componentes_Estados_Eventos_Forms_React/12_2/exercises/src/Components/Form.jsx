import React, { Component } from 'react'


class Form extends Component {
  constructor(props) {
    super(props)
    this.startWithNumber = this.startWithNumber.bind(this);
    this.handleClick = this.handleClick.bind(this)
    this.fillInfo = this.fillInfo.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.state = {
      name:"",
      email:"",
      cpf:"",
      address:"",
      city: "",
      estado: this.props.data,
      tipo:"",
      resume: "",
      cargo: "",
      description: "",
      loadResume: false,
    } 
  }

  handleClick(event) {
    event.preventDefault()
    this.setState(() => ({
      loadResume: true,
    }))
  }

  clearForm(event) {
    this.setState(() => ({
      name:"",
      email:"",
      cpf:"",
      address:"",
      city: "",
      estado: this.props.data,
      tipo:"",
      resume: "",
      cargo: "",
      description: "",
      loadResume: false,
    }))
  }

  startWithNumber(event) {
    const { value } = event.target
    const typeValue = parseFloat(value)
    if (!isNaN(typeValue)) this.setState({city: ""})
  }

  fillAlert() {
    alert('Preencha com cuidado esta informação')
  }

  fillInfo() {
    const  {
      name,
      email,
      cpf,
      address,
      city,
      tipo,
      resume,
      cargo,
      description,
    } = this.state
    return(
      <div>
        <ul>
          <li>{name}</li>
          <li>{email}</li>
          <li>{cpf}</li>
          <li>{address}</li>
          <li>{city}</li>
          <li>{tipo}</li>
          <li>{resume}</li>
          <li>{cargo}</li>
          <li>{description}</li>
        </ul>
      </div>
    )
  }

  handleChange = (event) => {
    const { name, value } = event.target
    console.log(value)
    let finalValue = value
    if (name === "name") {
      finalValue = value.toUpperCase()
    } else if (name === "address") {
      finalValue = value.normalize("NFD").replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
      console.log(finalValue)
    }
    this.setState(() => ({
      [name]:finalValue
    }))
  }
  render() {
    const { loadResume } = this.state
    const { data } = this.props
    return(
      <div>
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
                required={true}
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
                required={true}
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
                required={true}
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
                required={true}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Cidade:
              <input
                value={this.state.city}
                type="text"
                maxLength="28"
                name="city"
                required={true}
                onChange={this.handleChange}
                onBlur={this.startWithNumber}
              />
            </label>
            <br />
  
            <select multiple={true} value={this.state.estado} onChange={this.handleChange} >

              {data.map((estado, key) => <option key={key}>{estado}</option>)}
              
            </select>
  
            <br />
            <div>
              <p>Tipo:</p>
              <label for="house"><input id="house" name="tipo" value="Casa" onChange={this.handleChange} type="radio" required="required" /> Casa</label>
              <label for="apartment" ><input id="apartment" name="tipo" value="Apartamento" type="radio"required="required" onChange={this.handleChange} /> Apartamento</label>
            </div>
          </fieldset>
  
          <fieldset>
            <label htmlFor="">
              Resumo do curriculo:
              <textarea 
              name="resume" 
              id="" cols="30" 
              rows="5"
              maxLength="1000"
              required={true}
              value={this.state.resume}
              onChange={this.handleChange}
              />
            </label>
            <br />
            <label htmlFor="">
              Cargo:
              <input 
              name="cargo" 
              id="" cols="30" 
              rows="5"
              maxLength="40"
              required={true}
              value={this.state.cargo}
              onChange={this.handleChange}
              onMouseEnter={this.fillAlert}
              />
            </label>
            <br />
            <label htmlFor="">
              Descrição do Cargo:
              <textarea 
              name="description" 
              id="" cols="30" 
              rows="5"
              maxLength="500"
              required={true}
              value={this.state.description}
              onChange={this.handleChange}
              />
            </label>
            <button onClick={this.handleClick}>Clique</button>
          </fieldset>
        </form>
        <label htmlFor="">
          Resumo das informações:
          <div>{loadResume ? this.fillInfo() : false} </div>
        </label>
        <button onClick={this.clearForm}>Clear</button>
      </div>
    )
  }
}

export default Form;
