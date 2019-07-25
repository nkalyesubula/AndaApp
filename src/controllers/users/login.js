import bcrypt from 'bcrypt';
import userModel from '../../models/index';
import Helper from '../../helpers/bcryptHash';

export const login = (req, res) => {
    const User = userModel.User;
    User.findOne({where: {email: req.body.email.toLowerCase()}}).then((results) => {
        if(!results){
            return res.status(400).json({status: 400, message: 'Incorrect email or password'});
        }else{
            const hash = results.password;
          
            bcrypt.compare(req.body.password, hash).then((compared) => {
                if(compared){
                    const payload = {
                        email: results.email,
                    }
                    const token = Helper.generateToken(payload);
                    return res.status(200).json({
                        status: 200,
                        data: {
                            token,
                            id: results.id,
                            firstname: results.firstname,
                            lastname: results.lastname,
                            email: results.email,
                            password: results.password,
                        }
                    });
                }else return res.status(400).json({
                    status:400,
                    message: 'Incorrect Email or Password'});
                    
            }).catch((err) => {
                return res.status(500).json({status:500, message: 'server error'})    
            })
        }
    })
};