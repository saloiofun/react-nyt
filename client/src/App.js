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
  <Router>
    <div>
      <Container>
        <Header>
          <Navbar />
        </Header>
        <Main >
          <Jumbotron />
          <Switch>
            <Route exact path='/' component={Search} />
            <Route exact path='/search' component={Search} />
            <Route path='/saved' component={Saved} />
          </Switch>
        </Main>
        <Footer />
      </Container>
    </div>
  </Router>

export default App
