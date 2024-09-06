const authorDBModel = require('../models/author')
const articleDbModel = require('../models/article')

const authorModel = new authorDBModel();
const ArticleModel = new articleDbModel();

class authorController{
    constructor(){
        const authors = [] 
    } 
    
    async getAuthorById(req, res){
        const author = await authorModel.findById(req.params.id)
        const articles = await ArticleModel.findMany(author)
        author['articles'] = articles
        res.status(201).json({author: author}) 
    } 
} 

module.exports = authorController