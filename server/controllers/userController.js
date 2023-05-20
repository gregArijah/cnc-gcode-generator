const { User } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            // .populate({
            //     path: 'createdBy',
            //     select: '-__v'
            // })
            .populate({
                path: 'toolLibrary',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            }
        );
    },

    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'projects',
                select: '-__v'
            })
            .populate({
                path: 'toolLibrary',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => {
                // If no user is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            }
        )
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        }
        );
    },

    // create user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    // update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        )
        .catch(err => res.json(err));
    },

    // delete user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            }
        )   
        .catch(err => res.status(400).json(err));
    },

    // add project to user's list of projects
    addProject({ params }, res) {
        User.findOneAndUpdate(  
            { _id: params.userId },
            { $addToSet: { projects: params.projectId } },
            { new: true, runValidators: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        )
        .catch(err => res.json(err));
    },

    // remove project from user's list of projects
    removeProject({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { projects: params.projectId } },
            { new: true, runValidators: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        )
        .catch(err => res.json(err));
    },

    // add tool to user's tool library
    addTool({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $addToSet: { toolLibrary: params.toolId } },
            { new: true, runValidators: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        )
        .catch(err => res.json(err));
    },

    // remove tool from user's tool library
    removeTool({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { toolLibrary: params.toolId } },
            { new: true, runValidators: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        )
        .catch(err => res.json(err));
    }
};

module.exports = userController;


