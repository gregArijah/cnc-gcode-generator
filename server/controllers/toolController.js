const { Tool } = require('../models');

const toolController = {
    // get all tools
    getAllTools(req, res) {
        Tool.find({})
            .populate({
                path: 'projects',
                select: '-__v'
            })
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
            .populate({
                path: 'projects',
                select: '-__v'
            })
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
    createTool({ body }, res) {
        Tool.create(body)
            .then(dbToolData => res.json(dbToolData))
            .catch(err => res.json(err));
    },

    // update tool by id
    updateTool({ params, body }, res) {
        Tool.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
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