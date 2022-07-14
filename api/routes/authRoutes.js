import express from 'express';
import { authController } from '../controllers/index.js';

const router = express.Router();

/**
 * crear usuario
 */
router.post('/auth/register', authController.register);

/**
 * Validar que exista un usuario con ese correo y contraseña proporcionados
 */
router.post('/auth/login', authController.login);

export default router;

/**
 * req.body (post put delete?)
 *
 *
 * req.params
 * req.query
 * req.headers
 *
 *
 * /auth/loging/pepeido123/pepitoeslomejor
 * GET
 *
 *
 * https
 * http
 *
 */
