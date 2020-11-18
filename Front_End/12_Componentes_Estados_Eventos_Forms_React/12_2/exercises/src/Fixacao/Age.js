import React, { Component } from 'react'


class Age extends Component {
  render() {
    const { value, event } = this.props
    return(
      <label>
        Idade:
        <input
          value={value}
          name="age"
          onChange={event}
        />
      </label>
    )
  }
}

export default Age;