import express from 'express'

const PORT = 3000;

const server = express()
server.use(express.json());

server.get('/ask', async (req, res) => {
    res.send('Hello World')
})


server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})