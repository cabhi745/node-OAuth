import express from 'express'
import { resolve } from 'path'
const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.send(JSON.stringify({
        a: 'heyy'
    }))
})

app.listen(PORT, () => {
    console.log("listening on port 3000!!")
})