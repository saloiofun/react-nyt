import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'
import Container from './components/Grid'
import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'
import Main from './components/Main'

const App = () =>
  <Container>
    <Navbar />
    <Jumbotron />
    <Main>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Search} />
            <Route exact path='/search' component={Search} />
            <Route path='/saved' component={Saved} />
          </Switch>
        </div>
      </Router>
    </Main>

  </Container>

export default App
