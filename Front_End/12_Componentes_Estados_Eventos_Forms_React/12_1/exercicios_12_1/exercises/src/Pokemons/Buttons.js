import React from 'react'

class Buttons extends React.Component {
  render() {
    const { value, onClick } = this.props
    return(
    <button className="button" value={value} onClick={onClick}>{value}</button>
    )
  }
}

export default Buttons;