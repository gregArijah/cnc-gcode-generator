const { Project } = require('../models');

const projectController = {
    // get all projects
    getAllProjects(req, res) {
        Project.find({})
            .populate({
                path: 'operations',
                select: '-__v'
            })
            .populate({
                path: 'toolLibrary',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbProjectData => res.json(dbProjectData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            }
        );
    },

    // get one project by id
    getProjectById({ params }, res) {
        Project.findOne({ _id: params.id })
            .populate({
                path: 'operations',
                select: '-__v'
            })
            .populate({
                path: 'toolLibrary',
                select: '-__v'
            })
            .select('-__v')
            .then(dbProjectData => {
                // If no project is found, send 404
                if (!dbProjectData) {
                    res.status(404).json({ message: 'No project found with this id!' });
                    return;
                }
                res.json(dbProjectData);
            }
        )
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        }
        );
    },

    // create project
    createProject({ body }, res) {
        Project.create(body)
            .then(dbProjectData => res.json(dbProjectData))
            .catch(err => res.json(err));
    },

    // update project by id
    updateProject({ params, body }, res) {
        Project.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
        )
        .then(dbProjectData => {
            if (!dbProjectData) {
                res.status(404).json({ message: 'No project found with this id!' });
                return;
            }
            res.json(dbProjectData);
        }
        )
        .catch(err => res.json(err));
    },

    // delete project
    deleteProject({ params }, res) {
        Project.findOneAndDelete({ _id: params.id })
            .then(dbProjectData => {
                if (!dbProjectData) {
                    res.status(404).json({ message: 'No project found with this id!' });
                    return;
                }
                res.json(dbProjectData);
            }
        )
        .catch(err => res.status(400).json(err));
    }
};

module.exports = projectController;