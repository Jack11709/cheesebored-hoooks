import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bulma'
import './main.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import SecureRoute from './components/common/SecureRoute'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import CheeseIndex from './components/cheeses/CheeseIndex'
import CheeseShow from './components/cheeses/CheeseShow'
import CheeseNew from './components/cheeses/CheeseNew'
import CheeseEdit from './components/cheeses/CheeseEdit'

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <SecureRoute path="/cheeses/:id/edit" component={CheeseEdit} />
          <SecureRoute path="/cheeses/new" component={CheeseNew} />
          <Route path="/cheeses/:id" component={CheeseShow} />
          <Route path="/cheeses" component={CheeseIndex} />
        </Switch>
      </>
    </Router>
  )
}

export default App
