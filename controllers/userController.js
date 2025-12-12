const User = require('../models/User');
const crypto = require('crypto');

// na3mlou create  user (inscription + activation code)
exports.createUser = async (req, res) => {
  try {
    // njibou activation code random
    const activationCode = crypto.randomBytes(20).toString('hex');

    const user = new User({
  nom: req.body.nom,
  login: req.body.login,
  motdepasse: req.body.motdepasse,
  role: req.body.role || 'user',
  activationCode
});


    // nhotou user fil DB
    await user.save();

    res.status(201).json({
      success: true,
      message: 'Utilisateur créé. Activez le compte avec le code.',
      activationCode
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

//  na3mlou Activate lel account
exports.activateAccount = async (req, res) => {
  try {
    // naamlou recherche user b activation code
    const user = await User.findOne({ activationCode: req.params.activationCode });

    if (!user) {
      return res.status(404).json({ message: 'Code invalide' });
    }

    // na3mlou activate lel compte
    user.isActive = true;
    user.activationCode = null;
    await user.save();

    res.json({ success: true, message: 'Compte activé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Get all users (without passwords)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');

    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Update user
exports.updateUser = async (req, res) => {
  try {
    const updates = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    ).select('-password');

    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });

    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//  Delete user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });

    res.json({ success: true, message: 'Utilisateur supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
