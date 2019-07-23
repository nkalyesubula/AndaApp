import userModel from '../../models/index'
import dotenv from 'dotenv';
import bcryptHash from '../../helpers/bcryptHash';

dotenv.config();

const User = userModel.User;

class SignClass{
    static signup(req, res) {
        const hashedPassword = bcryptHash.hashFunction(req.body.password);
        const {firstname, lastname, email} = req.body;
        const userSchema = {firstname,lastname,email,password: hashedPassword}

        User.create(userSchema)
        .then((user) => {
            const {id, firstname, lastname, email} = user;
            const payload = {id,firstname,lastname,email};
            
            const token = bcryptHash.tokenFunction(payload, process.env.SECRET_KEY)
            res.status(201).json({
                status: 201,
                data: {
                    token,
                    id: user.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                },
            })
        })
        .catch((err) => {
            return res.status(500).json({
                status: 500,
                message: ' server error'
            });
        });
    };
};

export default SignClass;