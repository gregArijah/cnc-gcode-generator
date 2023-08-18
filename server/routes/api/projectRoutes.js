const router = require('express').Router();
const {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
} = require('../../controllers/projectController');

// Set up GET all and POST at /api/projects
router.route('/')
    .get(getAllProjects)
    .post(createProject);

// Set up GET one, PUT, and DELETE at /api/projects/:id
router.route('/:id')
    .get(getProjectById)
    .put(updateProject)
    .delete(deleteProject);

module.exports = router;