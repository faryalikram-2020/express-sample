const express = require('express')
const app = express()
const os = require('os')
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  const date = new Date()
  const cpu = os.cpus().length
  const availableMem = os.totalmem() / 1024 / 1024
  const freeMem = os.freemem() / 1024 / 1024
  const data = `Current time: ${date} <br/> Total CPU: ${cpu} <br/> Total Memory: ${availableMem} <br/> Free Memory: ${freeMem}`
  
  res.send(data)
})


app.get('/cpu', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(os.cpus(), null, 2))
})

app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`)
})
