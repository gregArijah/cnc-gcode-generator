const { Schema, model } = require('mongoose');
const moment = require('moment');

const ToolSchema = new Schema({
    toolId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    toolNumber: {
        type: Number, 
        required: true,
    },
    toolType: {
        type: String,
        required: true,
        trim: true,
        enum: ['End Mill', 'Ball Mill', 'Drill', 'Tap', 'Reamer', 'Boring Bar', 'Face Mill', 'Fly Cutter', 'Insert', 'Other']
    },
    toolDiameter: {
        type: Number,
    },
    toolRadius: {
        type: Number,
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

//initialize model
const Tool = model('Tool', ToolSchema);

//export model
module.exports = Tool;

