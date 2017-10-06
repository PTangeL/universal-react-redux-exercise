import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import App from '../shared/components/App'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
