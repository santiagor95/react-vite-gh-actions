import express from 'express'

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8000
const app = express()

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', async (req, res) => {

  const packageJson = await import("./package.json", {
    assert: { type: "json" },
  });

  res.send(packageJson.default.version)
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})