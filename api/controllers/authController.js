/**
 * register
 * y
 * login
 */
import { User } from '../models/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';
import config from '../../config/index.js';

const register = async (req, res) => {
  try {
    /**
     * email
     * password
     */

    const encryptedPass = await bcrypt.hash(req.body.password, 3);
    req.body.password = encryptedPass;
    const newUser = await User.create(req.body);
    newUser.password = undefined;
    return res.json({
      msg: 'Usuario registrado satisfactoriamente',
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al registrar usuario',
    });
  }
};

/**
 * req.body
 * req.params
 * req.query
 * req.headers
 */

const login = async (req, res) => {
  const { password, email } = req.body;
  /**
   * 1.- Buscar al usuario que tiene el email recibido ✔
   *      Si no encuentra un usuario, regresamos error 401 ✔
   * 2.- Comparar contraseñas ✔
   *      Si falla la comparación regrear 401 ✔
   * 3.- Generar un token y regresarlo (json - body) cookie
   *
   */
  try {
    const user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(401).json({
        msg: 'Credenciales erroneas',
      });
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        msg: 'Credenciales erroneas',
      });
    }

    //Creación de token

    //Sugerencias para guardar en el payload

    /**
     * fecha de caducidad de token
     * user id
     * ip de la petición
     */
    const payload = {
      userId: user.id,
    };
    const token = jwt.encode(payload, config.token.secret);
    return res.json({
      msg: 'Login correcto',
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al hacer login',
    });
  }
};

export { register, login };
