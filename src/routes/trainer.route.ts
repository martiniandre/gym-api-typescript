import { Router } from 'express'
import TrainerController from '../controllers/TrainerController'

const trainer = Router()
const trainerController = new TrainerController()


trainer.get('/', trainerController.getTrainers)
trainer.post('/', trainerController.registerTrainer)
trainer.put('/:id', trainerController.updateTrainer)
trainer.delete('/:id', trainerController.deleteTrainer)


export default trainer