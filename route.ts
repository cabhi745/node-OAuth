import express from 'express'
import { resolve } from 'path'
import * as controller from './controllers'

const PORT = 3000
const app = express()

app.get('/', controller.indexController)

app.listen(PORT, () => {
    console.log("listening on port 3000!!")
})