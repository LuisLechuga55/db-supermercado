import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  subtotal: {
    type: Number,
    required: true,
    default: 0,
  },
  iva: {
    type: Number,
    required: true,
    default: 0,
  },
  total: {
    type: Number,
    required: true,
    default: 0,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

export default mongoose.model('Ticket', ticketSchema);