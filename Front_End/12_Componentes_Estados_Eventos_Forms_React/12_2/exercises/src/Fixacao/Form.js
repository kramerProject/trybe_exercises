import React, { Component } from 'react'
import Name from './Name'
import Age from '../Age'



class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      about: '',
      show: false,
      formularioComErros: false
    }
  }

  handleError = (error) => {
    console.log(error)
    
  }
  handleChange = (event) => {
    const { name, value, type } = event.target
    
    const finalValue = type === "checkbox" ? event.target.checked : value
    this.setState(() => ({
      [name]: finalValue
    }))
  }

  render() {
    return(
      <div>
        <form>
          <fieldset>
            <Name validate={this.handleError} value={this.state.name} event={this.handleChange} />
            <Age value={this.state.age} event={this.handleChange} />
            <label for="">
              Sexo
              <select>
                  <option value="Escolha">Gender</option>
                  <option value="Homem">Homem</option>
                  <option value="Mulher">Mulher</option>
              </select>
            </label>
          </fieldset>

          <label>
            Sobre
            <textarea 
              value={this.state.about}
              name="about"
              onChange={this.handleChange}
            />
          </label>

          <input 
            value={this.state.show}
            type="checkbox" 
            name="show"
            onChange={this.handleChange}
          />
          <input 
            type="file"
          />
        
        </form>
      </div>
    )
  }
}

export default Form;