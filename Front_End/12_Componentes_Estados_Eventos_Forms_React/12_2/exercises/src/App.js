import logo from './logo.svg';
import './App.css';
import  Form from './Components/Form'

import cities from './Components/Data'



function App() {
  return (
    <div className="App">
      <Form data={cities}/>
    </div>
  );
}

export default App;
