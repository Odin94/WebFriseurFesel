var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/preise', function (req, res, next) {
    res.render('preise');
});

router.get('/anfahrt', function (req, res, next) {
    res.render('anfahrt');
});

router.get('/kontakt', function (req, res, next) {
    res.render('kontakt');
});

/* GET ABOUT page. */
router.get('/about', function (req, res, next) {
    res.render('about');
});

/* GET IMPRESSUM page. */
router.get('/impressum', function (req, res, next) {
    res.render('impressum');
});

module.exports = router;
