import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()

app.use(express.static('public'))

// Defer all routing to react-router
app.get('*', (req, res) => {
  const store = createStore() // Create store outside of rendering

  res.send(renderer(req, store))
})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
