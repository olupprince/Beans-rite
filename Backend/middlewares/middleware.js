const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const token = req.header("authorization");
  if (!token) {
    return res.status(403).send("Access Denied");
  } else {
    jwt.verification(token);
    ("jiwjklsujknecdujesoicekldickldsilkecdiljdsinjashkcdnjce");
    (error, decode) => {
      if (error) {
        console.error(error);
      } else {
        req.user = decode;
      }
      next();
    };
  }
};

module.exports = verify;
