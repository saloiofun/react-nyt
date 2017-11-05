import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'
import Container from './components/Grid'
import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () =>
  <Container>
    <Header>
      <Navbar />
      <Jumbotron />
    </Header>
    <Main>
      <Router>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/search' component={Search} />
          <Route path='/saved' component={Saved} />
        </Switch>
      </Router>
    </Main>
    <Footer />
  </Container>

export default App
