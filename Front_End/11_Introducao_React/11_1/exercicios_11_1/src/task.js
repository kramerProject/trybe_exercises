import React from 'react'

const array = ['casa', 'roupa', 'trabalho']


class Task extends React.Component {
  
  render() {
    return (
      array.map(element => <li>{element}</li>
    )
  }
}

export default Task