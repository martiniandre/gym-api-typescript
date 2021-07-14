import { Router } from 'express'
import UserAppointmentController from '../controllers/UserAppointmentController'

const userAppointment = Router()
const userAppointmentController = new UserAppointmentController()


userAppointment.get('/', userAppointmentController.getUserAppointment)
userAppointment.post('/', userAppointmentController.createUserAppointment)
userAppointment.put('/', userAppointmentController.updateUserAppointment)
userAppointment.delete('/', userAppointmentController.deleteUserAppointment)


export default userAppointment