import Joi from 'joi';
/**
 * 1.- Crear Schema (molde, esquema, esqueleto) ✔
 * 2.- Validar
 */

const bodySchema = Joi.object({
  name: Joi.string().required(),
  nationality: Joi.string().optional(),
  birthday: Joi.date().required(),
  lastName: Joi.string().required(),
});

const validateAuthor = async (req, res, next) => {
  try {
    await bodySchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Body inválido',
      error,
    });
  }
};

export default validateAuthor;
