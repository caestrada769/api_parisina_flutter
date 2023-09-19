const mongoose = require('mongoose');

const productionSchema = new mongoose.Schema({
  producto: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  cantidad: {
    type: int,
    required: true,
  },
  estado: {
    type: int,
    required: true,
  },
});

const Production = mongoose.model('Production', productionSchema);

module.exports = Production;
