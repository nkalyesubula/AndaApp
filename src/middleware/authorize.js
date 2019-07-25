const jwt = require('jsonwebtoken');
import env from "dotenv"; 
env.config()

let authorize =(role) =>{ 
return (req, res, next) => {
    if(!req.auth || req.auth.role!= role){
      return res.status(401).send({
        status:401,
        error:"Unauthorized access"
      })
    }  else {
      next();
    }
  }
};
 export default authorize;