import express from 'express';
import { userController } from '../controllers/index.js'

const router = express.Router();

router
  .route('/')
  .post(userController.create)
  .get(userController.getAll);

router
  .route('/:id')
  .get(userController.getById)
  .put(userController.updateById)
  .delete(userController.deleteById);



export default router;