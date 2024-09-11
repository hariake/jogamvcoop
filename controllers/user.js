const bcrypt = require('bcrypt')
const userDbModel = require('../models/user')
const UserModel = new userDbModel()

class userController{

    async register(req, res) {

        const {username, email, password} = req.body;
        
        if (password.length < 5) {
            return res.status(400).json({
                message: 'Password must be at least 5 characters long'
            });
        }

        const existingUser = await UserModel.findOne(username);
            if (existingUser) {
                return res.status(400).json({
                    message: 'Username already exists'
                });
            }  
        
        const cryptPassword = await bcrypt.hash(req.body.password, 10)
            const registeredId = await UserModel.create({
                username, 
                email ,
                password: cryptPassword
            })          
            
            if(registeredId){
                const userData = await UserModel.findById(registeredId)
                req.session.user = {
                    username: userData.username,
                    user_id: userData.id
                } 
                res.json({
                    message: 'New user is registered',
                    user_session: req.session.user
                })
            } 
    } 
} 

module.exports =  new userController()