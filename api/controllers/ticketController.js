import { Ticket } from "../models/index.js";

const returnError = (msg, res) => {
  return res.status(500).json({
    msg
  })
};


const getAll = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    return res.json({
      msg: 'Tickets obtenidos',
      tickets
    })
  } catch (error) {
    return returnError('Error al obtener Tickets', res)
  }
};


const getById = async (req, res) => {
  try {
    const { id } = req.params
    const tickets = await Ticket.findById(id);
    return res.json({
      msg: 'Ticket encontrado',
      tickets
    });
  } catch (error) {
    return returnError('Error al obtener por ID', res);
  }
};


const create = async (req, res) => {
  try {
    const newTicket = await Ticket.create(req.body);
    return res.json({
      msg: 'Ticket creado',
      ticket: newTicket,
    });
  } catch (error) {
    return returnError('Error al crear ticket', res)
  }
};


const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findByIdAndUpdate(id, req.body);
    return res.json({
      msg: 'Ticket Actualizado',
      ticket
    });
  } catch (error) {
    return returnError('Error al actualizar Ticket');
  }
};


const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findByIdAndDelete(id);
    return res.json({
      msg: 'Ticket eliminado',
      ticket,
    });
  } catch (error) {
    return returnError('Error al borrar Ticket', res)
  }
};

const calculate = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findById(id).populate('items');
  } catch (error) {
    return returnError('Error al calcular Ticket', res)
  }
};


export {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  calculate
}