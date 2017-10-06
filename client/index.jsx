import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import configureStore from '../shared/store/configureStore'
import Root from '../shared/components/Root'

const store = configureStore(window.__store_initial_state__)

ReactDOM.hydrate(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root')
)
