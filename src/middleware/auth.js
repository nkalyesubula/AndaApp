const jwt = require('jsonwebtoken');
import Util from '../Middlewares/util';
import env from "dotenv"; 
const util = new Util();
env.config()

let validateToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; 
    if(!token){
        util.setError(401, 'Unauthorized access');
        return util.send(res);
    }  
  if (token.startsWith('Bearer ')) {
  
      token = token.slice(7, token.length);
    }

    if (token) {
      jwt.verify(token, process.env.secret_key, (err, decode) => {
        if (err) {
             util.setError(401, 'Token is not valid');
             return util.send(res);
        } else {
          console.log(decode)
          req.auth = decode;
          next();
        }
      });
    } else {
        util.setSuccess(400, 'Auth token is not supplied');
        return util.send(res);
    }
  };
  export default validateToken;