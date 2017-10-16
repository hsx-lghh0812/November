var beans = require("../beans")
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function (req, res, next) {
    var userId = req.params.id
    console.log(userId,"--------------------------------------",beans.User)
    beans.User.findAll({
        where: {
            id: userId
        }
    }).then(function (user) {
        res.json(user);
    })
});

module.exports = router;
