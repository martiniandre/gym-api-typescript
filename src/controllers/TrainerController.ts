import { Request, Response } from 'express'
import bc from 'bcryptjs'
import Trainer from '../models/Trainer'

interface IUsers{
    _id: string
    firstName: string
    lastName: string
    weigth:number
    height:number
}

interface ITrainer  {
    _id?: string
    email:string
    firstName: string
    lastName: string
    password: string
    users?: IUsers[]
    created_at?: Date
    updated_at?: Date
}

class TrainerController {
    async getTrainers (req:Request,res:Response) {
        const trainers:ITrainer[] = await Trainer.find()
        return res.json(trainers)
    }

    async registerTrainer (req:Request,res:Response){
        const trainer:ITrainer = req.body

        const emailAlreadyExists = await Trainer.findOne({email: trainer.email})

        if(emailAlreadyExists) return res.json({
            error: "Email already registered"
        })
        const hashPassword = await bc.hashSync(trainer.password, 10)
        trainer.password = hashPassword
        
        const newTrainer = await Trainer.insertMany(trainer)
        return res.json(newTrainer)
    }

    async updateTrainer (req:Request,res:Response){
        const { id } = req.params
        const trainer:ITrainer= req.body
        const isTrainerValid = await Trainer.findOne({_id: id})

        if(!isTrainerValid) return res.status(402).json({
            error: "Trainer ID not found",
            success:false,
        })
        delete trainer._id
        
        const updateTrainer = await isTrainerValid.updateOne({ $set: trainer })
        return res.status(200).json({
            ...updateTrainer,
            success:true
        })
    }
    async deleteTrainer(req:Request,res:Response){
       const { id } = req.params
        const isUserValid = await Trainer.findOne({_id: id})

        if(!isUserValid) return res.status(402).json({
            error: "TrainerID not found",
            success:false,
        })

        await isUserValid.delete()
        return res.status(200).json({
            success:true
        })
    }
}

export default TrainerController