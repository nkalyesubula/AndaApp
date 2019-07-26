import  bcrypt from'bcrypt';
import jwt from 'jsonwebtoken';
import env from "dotenv"; 
env.config()

class Helper  {
  
  hashPassword(password) {  
    return bcrypt.hashSync(password, bcrypt.genSaltSync(100))
  }
  comparePassword(hashPassword, password) {
    
    return bcrypt.compareSync(password, hashPassword);
  }

 generateToken(userName,role) {
    const token = jwt.sign(
      { userName:userName,role:role },
      process.env.SECRET_KEY,
      { expiresIn: '24h' });

    return token;
  }
 verifyToken(token) {
   try{
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    return  decode;
   }catch{
    return  false;
   }
    
  }
}
export default new Helper();