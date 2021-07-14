import { Request, Response } from 'express'
import bc from 'bcryptjs'
import User from '../models/User'

interface IUser  {
    email:string
    firstName: string
    lastName: string
    password: string
    created_at?: Date
    updated_at?: Date
}


class UserController {
    async getUsers (req:Request,res:Response) {
        const users:IUser[] = await User.find()
        return res.json(users)
    }

    async createUser (req:Request,res:Response){
        const {email,firstName, lastName,password }:IUser = req.body

        const emailAlreadyExists = await User.findOne({email})

        if(emailAlreadyExists) return res.json({
            error: "Email already registered"
        })
        const hashPassword = await bc.hashSync(password, 10)
        
        const newUser = await User.insertMany({email,password: hashPassword,firstName,lastName})
        return res.json(newUser)
    }

    async updateUser (req:Request,res:Response){
        const { id } = req.params
        const { email,firstName, lastName }:IUser = req.body
        const isUserValid = await User.findOne({_id: id})

        if(!isUserValid) return res.status(402).json({
            error: "User ID not found",
            success:false,
        })

        const updateUser = await isUserValid.updateOne({ $set: { email,firstName,lastName } })
        return res.status(200).json({
            ...updateUser,
            success:true
        })
    }
    async deleteUser (req:Request,res:Response){
       const { id } = req.params
        const isUserValid = await User.findOne({_id: id})

        if(!isUserValid) return res.status(402).json({
            error: "User ID not found",
            success:false,
        })

        await isUserValid.delete()
        return res.status(200).json({
            success:true
        })
    }
}

export default UserController