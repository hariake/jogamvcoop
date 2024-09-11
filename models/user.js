const BaseSQLModel = require('./base');


class UserModel extends BaseSQLModel{
    constructor() {
        super('user');
    } 
    async findById(user_id) {
        const user = await super.findById(user_id)
        return user;
      }
      async create(user){
        const createdUserId = await super.create(user)
        return createdUserId
    } 
    async findOne(user){
        const username = await super.findOne('username', user)
        return username
    } 

} 

module.exports = UserModel