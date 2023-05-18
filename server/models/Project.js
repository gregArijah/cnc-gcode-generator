//define project schema for mongoose

const { Schema, model } = require('mongoose'); 
const moment = require('moment');

const ProjectSchema = new Schema({
    projectId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    projectName: {
        type: String,
        required: true,
        trim: true
    },
    projectDescription: {
        type: String,
        required: true,
        trim: true 
    },
    projectTools: [{
        type: Schema.Types.ObjectId,
        ref: 'Tool'
    }],
    operations: [{
        type: Schema.Types.ObjectId,
        ref: 'Operation'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
    }
});

//initialize model
const Project = model('Project', ProjectSchema);

//export model
module.exports = Project;
