const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");
const { UnathunticatedError, BadRequest } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnathunticatedError("No Token Provided.");
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;

    req.user = { id, username }; //we do this in middleware to use the data in routes controller
  //به عبارتی ما این پراپرتی هارو به تابع بعدی توی مسیرمون پاس میدیم


    next();

  } catch (error) {
    throw new UnathunticatedError("Not authorized to access this route.");
  }
};

module.exports = authenticationMiddleware;
