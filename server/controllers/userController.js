const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'toolLibrary',
                select: '-__v'
            })
            .populate({
                path: 'projects',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            }
        );
    },

    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'toolLibrary',
                select: '-__v'
            })
            .populate({
                path: 'projects',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => {
                // If no user is found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            }
        )
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        }
        );
    },

    // create user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    // update user by id
    updateUser({ params, body }, res) {
        //check if password is being updated
        if (body.password) {
            //hash password
            const salt = bcrypt.genSaltSync(10);
            body.password = bcrypt.hashSync(body.password, salt);
        }

        User.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        }
        )
        .catch(err => res.json(err));
    },

    // delete user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            }
        )   
        .catch(err => res.status(400).json(err));
    },

    // login user
    loginUser({ body }, res) {
        //get username and password from body
        const { username, password } = body;

        //check if user exists and password is correct
        User.findOne({ username: username })
            .then((user) => {
                if (!user) {
                    res.status(400).json({ message: 'No user found with this username!' });
                    //window.alert('No user found with this username!');
                    return;
                }
                //check if password is correct
                user.comparePassword(password)
                    .then((isCorrect) => {
                        if (!isCorrect) {
                            res.status(400).json({ message: 'Incorrect password!' });
                            return;
                        }
                        //if user exists and password is correct, generate jwt token
                        const token = jwt.sign(
                            { userId: user._id },
                            process.env.JWT_SECRET,
                            { expiresIn: '1d' }
                        );
                        //send token to client
                        res.json({ token: token, user: user});
                    })
                    
                    .catch((err) => {
                        console.log(err);
                        res.sendStatus(400);
                    });
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },
};

module.exports = userController;


