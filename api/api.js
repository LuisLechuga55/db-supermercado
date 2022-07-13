import express from 'express';
import { itemRoutes, ticketRoutes, userRoutes } from './routes/index.js';

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.get('/', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use('/tickets', ticketRoutes);
api.use('/items', itemRoutes);
api.use('/users', userRoutes);


export default api;