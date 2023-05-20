const { Tool, User } = require('../models');

const toolController = {
    // get all tools
    getAllTools(req, res) {
        Tool.find({})
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbToolData => res.json(dbToolData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            }
        );
    },

    // get one tool by id
    getToolById({ params }, res) {
        Tool.findOne({ _id: params.id })
            .select('-__v')
            .then(dbToolData => {
                // If no tool is found, send 404
                if (!dbToolData) {
                    res.status(404).json({ message: 'No tool found with this id!' });
                    return;
                }
                res.json(dbToolData);
            }
        )
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        }
        );
    },

    // create tool
    createTool(req, res) {
        Tool.create(req.body)
            .then( dbToolData => {
                User.findOneAndUpdate(
                    { _id: req.body.userId }, 
                    { $push: { toolLibrary: dbToolData._id } },
                    { runValidators: true, new: true }
                )
                .then(dbUserData => {
                    if (!dbUserData) {
                        res.status(404).json({ message: 'No user found with this id!' });
                        return;
                    }
                    res.json(dbToolData);
                })
                .catch(err => res.json(err));
            })
           
    },
     

    // update tool by
    updateTool( req, res) {
        Tool.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then(dbToolData => {
            if (!dbToolData) {
                res.status(404).json({ message: 'No tool found with this id!' });
                return;
            }
            res.json(dbToolData);
        }
        )
        .catch(err => res.json(err));
    },

    // delete tool
    deleteTool({ params }, res) {
        Tool.findOneAndDelete({ _id: params.id })
            .then(dbToolData => {
                if (!dbToolData) {
                    res.status(404).json({ message: 'No tool found with this id!' });
                    return;
                }
                res.json(dbToolData);
            }
        )
        .catch(err => res.status(400).json(err));
    }
};

module.exports = toolController;