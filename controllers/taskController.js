const Task = require('../models/Task');

//  Create task
exports.createTask = async (req, res) => {
  try {
    // na3mlou task jdida m3a data eli ja min request
    const task = new Task({
      titre: req.body.titre,
      description: req.body.description,
      statut: req.body.statut,
      deadline: req.body.deadline,
      project: req.body.project,
      assignedTo: req.body.assignedTo
    });

    // nhotou task fil DB
    await task.save();

    res.status(201).json({ success: true, task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// na3mlou List tasks mta3 project
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ project: req.query.project });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// na3mlou Update task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });

    res.json({ success: true, task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// na3mlou Delete task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) return res.status(404).json({ message: 'Tâche non trouvée' });

    res.json({ success: true, message: 'Tâche supprimée' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
