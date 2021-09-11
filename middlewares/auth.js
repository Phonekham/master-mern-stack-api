const admin = require("../firebase");

exports.authCheck = async (req, res, next) => {
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    req.user = firebaseUser;
    console.log("firebase user auth check", firebaseUser);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      err: "invalid or expire token",
    });
  }
};
