import React, { Component } from 'react'


class Name extends Component {
  
  render() {
    const { value, event, validate } = this.props
    const error = value.length > 15 ? true : false
    return(
      <label>
        Nome:
        <input
          value={value}
          name="name"
          onChange={event}
          validate={() => validate(error)}
        />
      </label>
    )
  }
}

export default Name;