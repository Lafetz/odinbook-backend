const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).end();
    }
    const token = header.split(" ")[1];

    const data = jwt.verify(token, process.env.TOP_KEY);

    req.user = data;

    next();
  } catch (err) {
    res.status(500).json(err.message);
  }
};
module.exports = verifyUser;
