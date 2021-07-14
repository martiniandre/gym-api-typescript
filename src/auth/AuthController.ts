import { Request, Response} from 'express'
import { SECRET } from './SECRET'

import bc from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/User'

interface IAuth{
    email:string
    password:string
}

class AuthController {
    async userLogin(req:Request,res:Response){
        const {email,password}:IAuth = req.body

        const user = await User.findOne({email})
        
        if(!user) return res.status(401).json({
            message: "Email/Password incorrect"
        }).status(401)

        const hashPassword = bc.compareSync(password,user.password)

        if(!hashPassword) return res.status(401).json({
            message: "Email/Password incorrect"
        }).status(401)

        if(user.email === email && hashPassword){
            const id = 1; //esse id viria do banco de dados
            const token = jwt.sign({ id }, SECRET , {
                expiresIn: 21600// expires in 5min
            });
            return res.json({ authenticated: true, token: token,user });
        }




    }
}

export default AuthController