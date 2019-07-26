import  bcrypt from'bcrypt';
import jwt from 'jsonwebtoken';
import env from "dotenv"; 
env.config()

class Helper  {
  
  hashPassword(password) {  
<<<<<<< HEAD
    return bcrypt.hashSync(password, bcrypt.genSaltSync(100))
=======
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
>>>>>>> 02fe618494bc3fc079934306585d05a7e3b6a623
  }
  comparePassword(hashPassword, password) {
    
    return bcrypt.compareSync(password, hashPassword);
  }

 generateToken(userName,role) {
    const token = jwt.sign(
      { userName:userName,role:role },
      process.env.secret_key,
      { expiresIn: '24h' });

    return token;
  }
 verifyToken(token) {
   try{
    const decode = jwt.verify(token, process.env.secret_key);
    return  decode;
   }catch{
    return  false;
   }
    
  }
}
export default new Helper();