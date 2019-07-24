import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class Helper {
    static hashPassword(password){
        const hash = bcrypt.hashSync(password, 10)
            return hash;
    };
    static generateToken(payload){
        const signedToken = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '2h'});
        return signedToken;
    }
    
}
export default Helper;