import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import reducers from '../reducers'

const configureStore = ({ initialState }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(createLogger())
  )

  return store
}

export default configureStore
