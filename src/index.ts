import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { config } from 'dotenv'

import user from './routes/user.route'
import appointment from './routes/appointment.route'
import userAppointment from './routes/userAppointment.route'
import trainer from './routes/trainer.route'
import auth from './routes/auth.route'

const app = express()
config()

app.use(cors())
app.use(express.json())

async function main(){
   await mongoose.connect(
            `mongodb+srv://${process.env.mongooseUser}:${process.env.mongoosePassword}@appointment.pf1fb.mongodb.net/test`,{
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            }
        )  

    app.use('/user', user)
   /*  app.use('/appointment', appointment)
    app.use('/user_appointment', userAppointment) */
    app.use('/trainer', trainer)
    app.use('/', auth)
    
    app.listen(3000, () => {
        console.log("app listening at http://localhost:3000")
    })

}    

main()