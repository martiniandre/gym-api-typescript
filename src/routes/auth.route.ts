import { Router } from 'express'
import AuthController from '../auth/AuthController'

const auth = Router()
const authController = new AuthController()


auth.post('/userLogin', authController.userLogin)



export default auth