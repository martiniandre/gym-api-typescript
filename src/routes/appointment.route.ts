import { Router } from 'express'
import AppointmentController from '../controllers/AppointmentController'

const appointment = Router()
const appointmentController = new AppointmentController()


appointment.get('/', appointmentController.getAppointment)
appointment.post('/', appointmentController.createAppointment)
appointment.put('/', appointmentController.updateAppointment)
appointment.delete('/', appointmentController.deleteAppointment)


export default appointment