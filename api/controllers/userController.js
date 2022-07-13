import { User } from "../models/index.js";

const returnError = (msg, res) => {
  return res.status(500).json({
    msg
  })
};


const getAll = async (req, res) => {
  try {
    const users = await User.find();
    return res.json({
      msg: 'User obtenidos',
      users,
    })
  } catch (error) {
    return returnError('Error al obtener Users', res)
  }
};


const getById = async (req, res) => {
  try {
    const { id } = req.params
    const users = await User.findById(id);
    return res.json({
      msg: 'User encontrado',
      users,
    });
  } catch (error) {
    return returnError('Error al obtener por ID', res);
  }
};


const create = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    return res.json({
      msg: 'User creado',
      user: newUser,
    });
  } catch (error) {
    return returnError('Error al crear User', res)
  }
};


const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    return res.json({
      msg: 'User Actualizado',
      user
    });
  } catch (error) {
    return returnError('Error al actualizar User');
  }
};


const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    return res.json({
      msg: 'User eliminado',
      user,
    });
  } catch (error) {
    return returnError('Error al borrar User', res)
  }
};


export {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}