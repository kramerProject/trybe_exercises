import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Users from './Users'
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      	<Switch>
      	  <Route path="/about/" component={About} />
      	  <Route path="/users/:userId" component={Users} />
      	  <Route exact path="/" component={Home} />
          <Route path="/strict" render={(props) => <StrictAccess {...props } user={{username: 'joao', password: 1234}} />} />
      	</Switch>
      </BrowserRouter>  
    )
  }
}

export default App;
