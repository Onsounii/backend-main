// import jsonwebtoken library bech net3amlo m3a JWT
const jwt = require('jsonwebtoken');

// middleware bech nverifyiw token fi requests
const verifyToken = (req, res, next) => {
  // njibou token, ya min cookies ya min Authorization header
  const token = req.cookies?.accessToken || req.headers['authorization']?.split(' ')[1];

  // ela ma fama token, nred 401 Unauthorized
  if (!token) return res.status(401).json({ success: false, message: 'Vous n\'êtes pas autorisé' });

  // verify token m3a secret
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    // ela token khata wala expired, nred 401
    if (err) return res.status(401).json({ success: false, message: 'Token invalide' });

    // nhotou  el decoded user fil request, bech routes/controllers ynajmou yest3mlouh
    req.user = user;

    // next bech middleware ykammel lel route
    next();
  });
};

// export el middleware bech nest3mlouh fi routes
module.exports = verifyToken;
