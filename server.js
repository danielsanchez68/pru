import express from 'express'
import * as operaciones from './api/operaciones.js'
import * as root from './api/root.js'

const app = express()

app.get('/', (req,res) => {
    res.send(root.getMensaje())
})

app.get('/info', (req,res) => {
    res.json({})
})

app.get('/random', (req,res) => {
    res.json({})
})

app.get('/operaciones', (req,res) => {
    let {num1, num2, operacion } = req.query
    res.json(operaciones.getResultado(num1, num2, operacion))
})

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
