const router = require('express').Router();
const {
    getAllTools,
    getToolById,
    createTool,
    updateTool,
    deleteTool
} = require('../../controllers/toolController');

// Set up GET all and POST at /api/tools
router.route('/')
    .get(getAllTools)
    .post(createTool);

// Set up GET one, PUT, and DELETE at /api/tools/:id
router.route('/:id')
    .get(getToolById)
    .put(updateTool)
    .delete(deleteTool);

module.exports = router;
