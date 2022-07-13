import express from 'express';
import { itemController } from '../controllers/index.js'

const router = express.Router();

router
  .route('/')
  .post(itemController.create)
  .get(itemController.getAll);

router
  .route('/:id')
  .get(itemController.getById)
  .put(itemController.updateById)
  .delete(itemController.deleteById);



export default router;