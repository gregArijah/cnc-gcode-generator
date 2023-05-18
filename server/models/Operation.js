const { schema, model } = require('mongoose');
const moment = require('moment');

const OperationSchema = new Schema({
    operationId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    operationName: {
        type: String,
        required: true,
        trim: true
    },
    operationData: {
        type: String,
        required: true,
        trim: true
    },
    operationGCode: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
    }
});

//initialize model
const Operation = model('Operation', OperationSchema);

//export model
module.exports = Operation;