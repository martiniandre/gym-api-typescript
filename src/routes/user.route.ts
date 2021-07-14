import { Router } from 'express'
import UserController from '../controllers/UserController'

const user = Router()
const userController = new UserController()


user.get('/', userController.getUsers)
user.post('/', userController.createUser)
user.put('/:id', userController.updateUser)
user.delete('/:id', userController.deleteUser)


export default user