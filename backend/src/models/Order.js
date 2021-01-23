const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  table: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
    required: true,
  },
  status: {
    type: 'string',
    enum: ['PENDING', 'PREPARING', 'DONE'],
    default: 'PENDING',
  },
});

module.exports = mongoose.model('Order', OrderSchema);
