import express from 'express'
import gpt from './gpt.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000;

const server = express()
server.use(express.json());

server.post('/ask', async (req, res) => {
    const q = req.body.question
    try {
        const answer = await gpt(q)
        res.json({ 
            answer: answer
        })
    } catch (error) {
        res.json({ error: 'Overloaded, try again later' })
    }
})


server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})