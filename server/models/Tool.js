const { Schema, model } = require('mongoose');
const moment = require('moment');

const toolSchema = new Schema({
  toolNumber: {
    type: Number,
    required: true
  },
  toolType: {
    type: String,
    required: true,
    trim: true,
    enum: ['End Mill', 'Ball Mill', 'Drill', 'Tap', 'Reamer', 'Boring Bar', 'Face Mill', 'Fly Cutter', 'Insert', 'Other']
  },
  toolDiameter: {
    type: Number
  },
  toolRadius: {
    type: Number
  },
  toolNotes: {
    type: String,
    trim: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
  }
});

const Tool = model('Tool', toolSchema);

module.exports = Tool;

