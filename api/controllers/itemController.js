import { Item } from '../models/index.js';

const returnError = (msg, res) => {
  return res.status(500).json({
    msg
  })
};


const getAll = async (req, res) => {
  try {
    const items = await Item.find();
    return res.json({
      msg: 'Items obtenidos',
      items
    })
  } catch (error) {
    return returnError('Error al obtener Items', res)
  }
};


const getById = async (req, res) => {
  try {
    const { id } = req.params
    const items = await Item.findById(id);
    return res.json({
      msg: 'Item encontrado',
      items
    });
  } catch (error) {
    return returnError('Error al obtener por ID', res);
  }
};


const create = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    return res.json({
      msg: 'Item creado',
      item: newItem,
    });
  } catch (error) {
    return returnError('Error al crear Item', res)
  }
};


const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const Item = await Item.findByIdAndUpdate(id, req.body);
    return res.json({
      msg: 'Item Actualizado',
      Item
    });
  } catch (error) {
    return returnError('Error al actualizar Item');
  }
};


const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const Item = await Item.findByIdAndDelete(id);
    return res.json({
      msg: 'Item eliminado',
      Item,
    });
  } catch (error) {
    return returnError('Error al borrar Item', res)
  }
};


export {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}