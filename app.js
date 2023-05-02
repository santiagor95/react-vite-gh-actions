import express from 'express'
// import { version } from './package.json'

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8000
const app = express()

app.get('/health', (req, res) => {
  res.send('ok')
})

// app.get('/version', (req, res) => {
//   res.send(version)
// })

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})