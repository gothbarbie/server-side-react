import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'

import Routes from './client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()
const API_URL = 'http://react-ssr-api.herokuapp.com'

app.use(
  '/api',
  proxy(API_URL, {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000'
      return opts
    }
  })
)
app.use(express.static('public'))

// Defer all routing to react-router
app.get('*', (req, res) => {
  const store = createStore(req) // Create store outside of rendering

  // if it exists, run loadData()
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })

  Promise.all(promises).then(() => {
    const context = {}
    const content = renderer(req, store, context)

    if (context.notFound) {
      res.status(404)
    }
    res.send(content)
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
