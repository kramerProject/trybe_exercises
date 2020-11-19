import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from './Home'


class StrictAccess extends React.Component {
  constructor(props) {
    super(props);
    this.validUser = this.validUser.bind(this)
    this.redirect = this.redirect.bind(this)
    this.state = {
      authenticate: false,
    }
  }
  

  validUser() {
    const { user } = this.props
    const valid = user.username === 'joao' && user.password === 1234
    
    return valid
  }

  redirect() {
    alert('acess denied')
    return (
      <Redirect>
        <Route exact path="/" component={Home} />
      </Redirect>
    )
  }

  

  render() {
    const welcome = 'Welcome joao!'
    return(
      <div>{this.validUser() ? welcome : this.redirect()}</div>
    )
  }
}


export default StrictAccess;