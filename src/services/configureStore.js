// packages
import { applyMiddleware, compose, createStore } from 'redux'
import { Iterable, fromJS } from 'immutable'
import { rootReducer } from 'reducers/_index'
// import thunkMiddleware from 'redux-thunk'

const createLogger =
  process.env.NODE_ENV === 'development'
    ? require('redux-logger').createLogger
    : null

const stateTransformer = state => {
  if (Iterable.isIterable(state)) return state.toJS()
  return state
}

export default function configureStore () {
  let store
  let initialState
  if (typeof window !== 'undefined' && window.__INITIAL_STATE__) {
    initialState = fromJS(window.__INITIAL_STATE__)
  }
  if (process.env.NODE_ENV === 'development') {
    console.log('ENV', process.env.NODE_ENV, process.env.NODE_ENV === 'development')
    const reduxDebug = process.env.REACT_APP_REDUX_DEBUG === 'true'
    store = compose(
      applyMiddleware(
        createLogger({
          collapsed: (getState, action, logEntry) =>
            !logEntry.error && !action.debug,
          diff: true,
          predicate: (getState, action) => reduxDebug || action.debug,
          stateTransformer
        })
      )
    )(createStore)(rootReducer, initialState)
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('reducers/_index', () => {
        const nextRootReducer = require('reducers/_index').rootReducer
        store.replaceReducer(nextRootReducer)
      })
    }
  } else {
    store = compose(
    )(createStore)(rootReducer, initialState)
  }

  return store
}
