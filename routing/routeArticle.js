const express       = require('express');
const router        = express.Router();

const articleController = require('../controllers/articleController');


router.get('/dataArticles', // Get All Articles
    articleController.getDataArticles
);

module.exports = router;