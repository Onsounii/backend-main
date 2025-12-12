const express = require('express');
const router = express.Router();

// Import mta3 controllers
const { createProject, getProjects, updateProject, deleteProject } = require('../controllers/projectController');


// Import mta3 middlewares
const verifyToken = require('../middlewares/verifyToken');
const authorizeRoles = require('../middlewares/authorizeRoles');

// Route POST bech na3mlou l projet
router.post('/', verifyToken, createProject);

// Route GET pour lister les projets lel utilisateur
router.get('/', verifyToken, getProjects);

// Route PUT  bch naamlou mise a jour mta3 projet
router.put('/:id', verifyToken, updateProject);

// Route DELETE bch na3mlou  supprimer lel projet
router.delete('/:id', verifyToken, deleteProject);

module.exports = router;

