import { Schema, model } from 'mongoose';
import moment from 'moment';

const toolSchema = new Schema({
  toolNumber: {
    type: Number,
    required: true,
    unique: true
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
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
  }
});

const Tool = model('Tool', toolSchema);

export default Tool;
