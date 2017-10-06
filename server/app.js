import React from 'react'
import { StaticRouter as Router } from 'react-router'
import Context from 'react-context-component'

import render from './render'
import Root from '../shared/components/Root'
import configureStore from '../shared/store/configureStore'

const ErrorPage = ({ error }) => (
  <div>
    <h1>Oops there was an error</h1>
    <h2>{ error.toString() }</h2>
    <p>{ error.stack }</p>
  </div>
)

const reactApp = (req, res) => {
  const context = {}
  let HTML
  let status = 200

  const setStatus = (newStatus) => {
    status = newStatus
  }

  const initialState = res.storeInitialState
  const store = configureStore(initialState)

  try {
    HTML = render(
      <Context setStatus={setStatus}>
        <Router context={context} location={req.url}>
          <Root store={store}/>
        </Router>
      </Context>,
      initialState
    )
  } catch (error) {
    HTML = render(<ErrorPage error={error} />)
    status = 500
  }

  if (context.url) {
    res.redirect(301, context.url)
  } else {
    res.status(status).send(HTML)
  }
}

export default reactApp
