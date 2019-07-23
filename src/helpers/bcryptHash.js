import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class secureCredentials {
    static hashFunction(password){
        const hash = bcrypt.hashSync(password, 10)
            return hash;
    };
    static tokenFunction(payload){
        const signedToken = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '2h'});
        return signedToken;
    }
    
}
export default secureCredentials;