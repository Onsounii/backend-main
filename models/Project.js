// njibou mongose 
const mongoose = require('mongoose');

// na3mlou schema mta3 "Project", ya3ni structure mta3 projet fi database
const projectSchema = new mongoose.Schema({
  // nom mta3 el projet, lazm ykoun mawjouda
  nom: { type: String, required: true },

  // description mta3 el projet, optionnel
  description: String,

  // owner mta3 el projet, marbout b User ObjectId
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  // statut mta3 el projet, ye5ou ken ['en cours','terminé','en pause'], default 'en cours'
  statut: { type: String, enum: ['en cours', 'terminé', 'en pause'], default: 'en cours' },

  // date el création, tetsajel automatiquement
  createdAt: { type: Date, default: Date.now }
});

// na3mlou export lel model bech n9darou nesta3mlouh fi ay fichier fil projet
module.exports = mongoose.model('Project', projectSchema);
