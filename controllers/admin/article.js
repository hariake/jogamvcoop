const articleDbModel = require('../../models/article')
const articleController = require('../article')
const ArticleModel = new articleDbModel()

class articleAdminController extends articleController{

    async createNewArticle(req, res)  {
        const newArticle = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace("T", " "),
            author_id: req.body.author_id
        }  
        const articleId = await ArticleModel.create(newArticle)
        res.status(201).json({
            message: `created article with id ${articleId}`,
            article: {id: articleId, ...newArticle}  
        })

    } 
        async updateArticle(req, res) {
            const articleId  = req.params.id;  // Extract article ID from route parameters
            const updatedArticle = {
                name: req.body.name,
                slug: req.body.slug,
                image: req.body.image,
                body: req.body.body,
                published: req.body.published,
                author_id: req.body.author_id
            }
            const result = await ArticleModel.update(articleId, updatedArticle)
            res.status(200).json({
                message: `updated article with id ${articleId}`,
                article: {id: articleId, ...updatedArticle}
            })
        }  
        async deleteArticle(req, res) {
            const articleId = req.params.id; 
            await ArticleModel.delete(articleId)
            res.status(200).json({
                message: `deleted article ${articleId}`
            })
        }
        
    } 

module.exports = new articleAdminController();