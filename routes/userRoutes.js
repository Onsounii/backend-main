const express = require('express');
const router = express.Router();

// hedha controllers
const { createUser, activateAccount, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');

// hedha middlewares
const verifyToken = require('../middlewares/verifyToken');
const authorizeRoles = require('../middlewares/authorizeRoles');

//hedha routes
router.post('/', createUser);
router.get('/activate/:activationCode', activateAccount);
router.get('/', verifyToken, authorizeRoles('manager'), getAllUsers);
router.get('/:id', verifyToken, getUserById);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, authorizeRoles('manager'), deleteUser);

module.exports = router;
