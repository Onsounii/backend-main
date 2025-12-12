// controllers/projectController.js
const Project = require('../models/Project');

// na3mlou Création lel projet
exports.createProject = async (req, res) => {
  try {
    const project = new Project({
      nom: req.body.nom,
      description: req.body.description,
      owner: req.user.id
    });

    await project.save();
    res.status(201).json({ success: true, project });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// na3mlou Liste des projetslel utilisateur
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ owner: req.user.id });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//na3mlou  Mise à jour lel projet
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.id },
      req.body,
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Projet non trouvé ou non autorisé' });
    }

    res.json({ success: true, project });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// na3mlou Suppression lel projet
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id
    });

    if (!project) {
      return res.status(404).json({ message: 'Projet non trouvé ou non autorisé' });
    }

    res.json({ success: true, message: 'Projet supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
