import { Request, Response } from 'express'

class AppointmentController {
    getAppointment (req:Request,res:Response) {
        res.send("Hello User Appointment")
    }
    createAppointment (req:Request,res:Response){
        const Appointment = req.body
        res.json({
            name:Appointment.name,
            age: Appointment.age
        })
    }
    updateAppointment (req:Request,res:Response){
        const Appointment = req.body
        res.json({
            ...Appointment,
            success: true
        })
    }
    deleteAppointment (req:Request,res:Response){
        const Appointment = req.body
        res.json({
            deleted: true
        })
    }
}

export default AppointmentController