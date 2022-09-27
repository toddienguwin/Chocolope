import mongoose from 'mongoose'
import app from './server.js'
import dotenv from 'dotenv'


main().catch(error => console.log(error))


async function main(){
    dotenv.config()
    app.set('port', process.env.PORT || 3005)
    try{
        await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log(`Connected to ${process.env.DB_NAME} database.`))
        app.listen(app.get('port'), () => {
            console.log(`listening on port ${app.get('port')}`)
        })
    } catch (e){
        console.error(e)
        process.exit(1)
    }
}