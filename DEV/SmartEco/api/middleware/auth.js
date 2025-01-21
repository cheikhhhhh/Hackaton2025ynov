const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token)
      res
        .status(401)
        .json({ auth: false, messager: "vous n'estes pas authoriser" });
    jwt.verify(token, "RANDOM_TOKEN_SECRET", (err, decodedToken) => {
      err
        ? res
            .status(401)
            .json({ auth: false, messager: "vous n'estes pas authoriser" })
        : (req.userId = decodedToken.id);
      next();
    });
  } catch (error) {
    res.json({ type: "From auth middleware", message: error });
  }
};
