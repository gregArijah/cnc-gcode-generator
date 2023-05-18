const router = require('express').Router();

const userRoutes = require('./userRoutes');
const operationRoutes = require('./operationRoutes');
const toolRoutes = require('./toolRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/operations', operationRoutes);
router.use('/tools', toolRoutes);
router.use('/projects', projectRoutes);

module.exports = router;