var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET API page */
router.get('/api', function(req, res) {
  res.render('api', { title: 'Twitter API' });
});

router.get('/tweetlist', function(req, res) {
    var db = req.db;
    var collection = db.get('search_tweets');
    collection.find({},{},function(e,docs){
        res.render('tweetlist', {
            "tweetlist" : docs
        });
    });
});

module.exports = router;
