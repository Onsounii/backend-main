// njibou express bech naamlou création router
const express = require('express');
const router = express.Router();

// njibou controller mta3 tasks li fih el logic mta3 CRUD
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');

const verifyToken = require('../middlewares/verifyToken');
const authorizeRoles = require('../middlewares/authorizeRoles');


// route bach na3mlou task jdida, protected b token
router.post('/', verifyToken, createTask);

// route bech nlawjou kol tasks, protected b token
router.get('/', verifyToken, getTasks);

// route bech naamlou update  task b id, protected b token
router.put('/:id', verifyToken, updateTask);

// route bech naamlou delete task b id, protected b token
router.delete('/:id', verifyToken, deleteTask);

// export router bech nest3mlouh fi app.js
module.exports = router;
