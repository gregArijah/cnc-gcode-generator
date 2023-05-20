//create user schema for mongoose

const { Schema, Types, model } = require('mongoose');
const moment = require('moment');

const UserSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    // },
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }],
    toolLibrary: [{
        type: Schema.Types.ObjectId,
        ref: 'Tool'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
    }
});

//initialize model
const User = model('User', UserSchema);

//export model
module.exports = User;
