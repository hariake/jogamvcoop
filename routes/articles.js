const express = require('express');
const router = express.Router();
const articleControllerClass = require('../controllers/article');

console.log('article routers')

const articleController = new articleControllerClass();

router.get('/', (req, res) => articleController.getAllArticles(req, res));
router.get('/article/:slug', (req, res) => articleController.getArticleBySlug(req, res));


module.exports = router;