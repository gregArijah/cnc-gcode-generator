const { Schema, model } = require('mongoose');
const moment = require('moment');

const operationSchema = new Schema({
  operationName: {
    type: String,
    required: true,
    trim: true
  },
  operationData: {
    type: Object,
    required: true,
    trim: true
  },
  operationGCode: {
    type: String,
    required: true,
    trim: true
  },
  operationSimulate: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
  }
});

const Operation = model('Operation', operationSchema);

module.exports = Operation;
