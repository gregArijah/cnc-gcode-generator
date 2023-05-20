const express = require('express');
const router = require('express').Router();
const userController = require('../../controllers/userController');

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

// Set up GET all and POST at /api/users
router.route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// //Set up POST and DELETE at /api/users/:userId/toolLibrary/:toolId  
// router.route('/:userId/toolLibrary/:toolId')
//     .post(userController.addToolToLibrary)
//     .delete(userController.removeToolFromLibrary);


module.exports = router;    