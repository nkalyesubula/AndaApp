import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const authentication = (req, res, next) =>{
    const token = req.headers.authorization;
    if (!token || token === ' ') {return res.status(401).json({
        message: 'Sorry, you are not authorized'
    })}
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
            if (err){
                return res.status(401).json({
                    err
                })
            } else{
                req.user = decoded;
                next();
            };
        });
};

export default authentication;