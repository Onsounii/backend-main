// middleware bech nhotou roles mta3 user
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    // l role mta3 user ma famaash fil roles allowed, nred 403
    if(!roles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: 'Accès interdit: droits insuffisants' });
    }

    // role mazelt correct, next bach middleware ykammel
    next();
  };
};

// export middleware bach nest3mlouh fi routes li habbin nprotectiwhom
module.exports = authorizeRoles;
