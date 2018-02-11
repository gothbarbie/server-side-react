import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

import reducers from '../client/reducers'

export default (req) => {
  const API_URL = 'http://react-ssr-api.herokuapp.com'
  const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: { cookie: req.get('cookie') || '' }
  })
  const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)))

  return store
}
