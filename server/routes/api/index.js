const router = require('express').Router();

const userRoutes = require('./userRoutes');
const operationRoutes = require('./operationRoutes');
const toolRoutes = require('./toolRoutes');
const projectRoutes = require('./projectRoutes');

const  { authUser }  = require('../../utils/auth');
router.use(setUser);

router.use('/users', authUser , userRoutes);
router.use('/operations', operationRoutes);
router.use('/tools', toolRoutes);
router.use('/projects', projectRoutes);

function setUser(req, res, next) {
    const userId = req.body.userId;
    if (userId) {
        req.user = userId;
    }
    next();
}

module.exports = router;