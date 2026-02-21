//check username and password in post(login) request
//if exist create JWT
//send back to front-end

//setup authentication so only the request with JWT can access the dashboard

const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error');
const { BadRequest } = require('../errors');

const login = async (req, res) => {
  const { username, password } = req.body;
  //mongoos validation
  //Joi
  //check in the controller
  
  if(!username || !password){
    throw new BadRequest("Username or Password is Empty.")
  }
  const id = new Date().getDate()

  //try to keep payload small better experience for user
  const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'}) //better go with an id

  res.status(200).json({msg:"User Created",token})
};

const dashboard = async (req, res) => {

res.status(200).json({msg:`Hello ${req.user.username}`,secret:"Finish"})
};

module.exports = { login, dashboard };
