const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "Alireza") {
    req.user = { name: "Alireza", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
