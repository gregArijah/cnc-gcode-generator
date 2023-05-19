const router = require ('express').Router();
const {
    getAllOperations,
    getOperationById,
    createOperation,
    updateOperation,
    deleteOperation
} = require ('../../controllers/operationController');

// Set up GET all and POST at /api/operations
router.route('/')
    .get(getAllOperations)
    .post(createOperation);

// Set up GET one, PUT, and DELETE at /api/operations/:id
router.route('/:id')
    .get(getOperationById)
    .put(updateOperation)
    .delete(deleteOperation);
    
module.exports = router;