import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()

app.use(express.static('public'))

// Defer all routing to react-router
app.get('*', (req, res) => {
  const store = createStore() // Create store outside of rendering

  // if it exists, run loadData()
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })

  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })

})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
