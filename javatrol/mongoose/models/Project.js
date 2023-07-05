import { Schema, model } from 'mongoose';
import moment from 'moment';

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
    trim: true
  },
  projectDescription: {
    type: String,
    trim: true
  },
  operations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Operation'
    } 
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
  }
});

const Project = model('Project', projectSchema);

export default Project;
