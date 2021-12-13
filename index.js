const express = require('express')
const app = express()
const os = require('os')
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})


app.get('/cpu', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(os.cpus(), null, 2))
})

app.get('/env', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(process.env, null, 2))
})

app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`)
})
