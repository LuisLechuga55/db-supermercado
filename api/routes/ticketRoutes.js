import express from 'express';
import { ticketController } from '../controllers/index.js'

const router = express.Router();

router
  .route('/')
  .post(ticketController.create)
  .get(ticketController.getAll);

router
  .route('/:id')
  .get(ticketController.getById)
  .put(ticketController.updateById)
  .delete(ticketController.deleteById);

router
  .route('/:id/calculate')
  .put(ticketController.calculate);


export default router;