
var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    // console.log(">>>", req)
    var userId = req.rawHeaders[17];
    // var userIDBe =
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;
