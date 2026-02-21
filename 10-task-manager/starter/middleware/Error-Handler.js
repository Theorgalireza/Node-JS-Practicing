const {CustomAPIError} = require('../errors/custom-error')

const errorHandlerMiddleware = (error, req, res, next) => {
  if (err instanceof CustomAPIError){
    return res.status(error.statusCode).json({msg:error.message})
  }


  return res.status(500).json({msg:"Something is wrong, Please try again."});
};
module.exports = errorHandlerMiddleware