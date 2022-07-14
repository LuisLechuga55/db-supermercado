import jwt from 'jwt-simple';
import config from '../../config/index.js';
import { User } from '../models/index.js';
const protectedRoute = (req, res, next) => {
  /**
   * 1.- Verificar que la petición tenga un token en el header ✅
   *      Si no, regresar un 401 ✅
   * 2.- Verificar que el token sea válido (decode) ✅
   *      Si no, regresar 401 ✅
   * 3.- Validar que exista el usuario guardado en el token
   *       (opcional) validar caducidad e ip
   * 4.- next()
   */
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      msg: 'Token requerido en la cabecera Authorization',
    });
  }
  try {
    const payload = jwt.decode(token, config.token.secret);
    const user = User.findById(payload.userId);
    if (!user) {
      return res.status(401).json('Usuario no existente');
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: 'Token inválido',
      error,
    });
  }
};

export default protectedRoute;
