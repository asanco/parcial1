var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getFollowers/:user', function(req, res, next) {

const user = req.params.user;
console.log(user);
    
var GitHubApi = require("github");
 
var github = new GitHubApi({

});
 
// TODO: optional authentication here depending on desired endpoints. See below in README.
 
github.users.getFollowingForUser({

    username: user
}, function(err, data) {
    res.json(data)
});
});

module.exports = router;
