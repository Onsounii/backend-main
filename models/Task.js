//njibou mongoose
const mongoose = require('mongoose');

// na3mlou schema mta3 "Task", ya3ni structure mta3 tâche fi database
const taskSchema = new mongoose.Schema({
  // titre mta3 la tâche, lazm ykoun mawjouda
  titre: { type: String, required: true },

  // description mta3 la tâche, optionnel
  description: { type: String },

  // statut mta3 la tâche, ye5ou ken ['todo','doing','done'], default 'todo'
  statut: { type: String, enum: ['todo', 'doing', 'done'], default: 'todo' },

  // deadline mta3 la tâche, optionnel
  deadline: { type: Date },

  // projet li ta3melou appartient liha la tâche, marbout b Project ObjectId
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },

  // li assignitouh la tâche, marbout b User ObjectId
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  // date el création, tetsajel automatiquement
  createdAt: { type: Date, default: Date.now }
});
//na3mlou export ll model 
module.exports = mongoose.model('Task', taskSchema);
