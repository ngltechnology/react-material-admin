import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"
import { createLogger } from 'redux-logger'

import reducers from './reducers';

const logger = createLogger({
  collapsed: true,
  diff: true,
})

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      logger,
      ReduxThunk,
    )
  )
);

export default store;