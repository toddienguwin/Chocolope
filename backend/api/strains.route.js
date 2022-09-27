import express from 'express'

const router = express.Router()

router.get('/', (request, response) => {
    response.send('hello world')
})

export default router