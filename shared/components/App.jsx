import React from 'react'
import PropTypes from 'prop-types'

import {
  Route,
  Switch,
  Link
} from 'react-router-dom'

import PageNotFound from './PageNotFound'
import Home from './Home'
import PhotosContainer from '../containers/PhotosContainer'

const App = () => (
  <div className="App">
    <Route path="/" component={ ({ match }) => (
      <div>
        <h1>Universal React</h1>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/photos" component={PhotosContainer}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    )}/>
  </div>
)

export default App
