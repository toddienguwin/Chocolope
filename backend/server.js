import express from 'express'
import cors from 'cors'
import strains from './api/strains.route.js'
const app = express() 


app.use(cors())             
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//
app.use('/api/v1/strains', strains)

app.use((request, response) => {
    response.status(404).json({err: 'not found'})
})

export default app