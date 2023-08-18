const { Operation, Project } = require('../models');

const operationController = {
    // get all operations
    getAllOperations(req, res) {
        Operation.find({})
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbOperationData => res.json(dbOperationData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            }   
        );
    },

    // get one operation by id
    getOperationById({ params }, res) {
        Operation.findOne({ _id: params.id })
            .select('-__v')
            .then(dbOperationData => {
                // If no operation is found, send 404
                if (!dbOperationData) {
                    res.status(404).json({ message: 'No operation found with this id!' });
                    return;
                }
                res.json(dbOperationData);
            }
        )
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        }
        );
    },

    // create operation
    createOperation(req, res) {
        Operation.create(req.body)
            .then(dbOperationData => {
                Project.findOneAndUpdate(
                    { _id: req.body.projectId },
                    { $push: { operations: dbOperationData._id } },
                    { runValidators: true, new: true }
                )
                .then(dbProjectData => {
                    if (!dbProjectData) {
                        res.status(404).json({ message: 'No project found with this id!' });
                        return;
                    }
                    res.json(dbOperationData);
                }
            )
            .catch(err => res.json(err));
        })
    },

    // update operation by id
    updateOperation({ params, body }, res) {
        Operation.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
        )
        .then(dbOperationData => {
            if (!dbOperationData) {
                res.status(404).json({ message: 'No operation found with this id!' });
                return;
            }
            res.json(dbOperationData);
        }
        )
        .catch(err => res.status(400).json(err));
    },

    // delete operation
    deleteOperation({ params }, res) {
        Operation.findOneAndDelete({ _id: params.id })
            .then(dbOperationData => {
                if (!dbOperationData) {
                    res.status(404).json({ message: 'No operation found with this id!' });
                    return;
                }
                res.json(dbOperationData);
            }
        )
        .catch(err => res.status(400).json(err));
    }
};

module.exports = operationController;
