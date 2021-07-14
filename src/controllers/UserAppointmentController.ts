import { Request, Response } from 'express'

class UserAppointmentController {
    getUserAppointment (req:Request,res:Response) {
        res.send("Hello User")
    }
    createUserAppointment (req:Request,res:Response){
        const data = req.body
        res.json({
            name:data.name,
            age: data.age
        })
    }
    updateUserAppointment (req:Request,res:Response){
        const data = req.body
        res.json({
            ...data,
            success: true
        })
    }
    deleteUserAppointment (req:Request,res:Response){
        const data = req.body
        res.json({
            deleted: true
        })
    }
}

export default  UserAppointmentController 
