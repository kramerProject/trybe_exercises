import React from 'react';

const array = ['casa', 'roupa', 'trabalho', 'futebol']


const task = (value) => {
  return (
  <li>{value}</li>
  );
}

class Component extends React.Component {
  render() {
    return (
      <div>
        <h1>Lista Kramer</h1>
        {array.map(element => task(element))}
      </div>
      
    )
  }
}

function App() {
  return <Component />
};

export default App;
