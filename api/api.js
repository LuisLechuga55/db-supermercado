import express from 'express';
import { authRoutes, itemRoutes, ticketRoutes } from './routes/index.js';
import { protectedRoute } from './middlewares/index.js';

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use(authRoutes);
api.get('/', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use(protectedRoute);

/**Rutas de ticket y de articulo */
api.use('/tickets', ticketRoutes);
api.use('/items', itemRoutes);

export default api;