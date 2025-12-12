const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Na3mlou Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // naamlou recherche user b email
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });

  // nchoufou  ila compte active
  if (!user.isActive) return res.status(403).json({ message: 'Compte non activé' });

  // nchoufou password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).json({ message: 'Mot de passe incorrect' });

  // naamlou création  JWT token m3a id w role, expires in 1 jour
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

  // naamlou repondre b token
  res.json({ token });
};
