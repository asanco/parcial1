var express = require('express');
var router = express.Router();


/* GET users listing. 
router.get('/getFollowers/:user', function(req,res,net){

var GitHubApi = require("github");
 
var github = new GitHubApi({
    // optional
    debug: true,
    Promise: require('bluebird'),
    timeout: 5000,
    host: "github.my-GHE-enabled-company.com", // should be api.github.com for GitHub
    pathPrefix: "/api/v3", // for some GHEs; none for GitHub
    protocol: "https",
    port: 9898,
    proxy: "<proxyUrl>",
    ca: "whatever",
    headers: {
        "accept": "application/vnd.github.something-custom",
        "cookie": "something custom",
        "user-agent": "something custom"
    },
    requestMedia: "application/vnd.github.something-custom",
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow disabling follow-redirects
    rejectUnauthorized: false, // default: true
    family: 6
});
 
// TODO: optional authentication here depending on desired endpoints. See below in README.
 
github.users.getFollowingForUser({
    // optional
    // headers: {
    //     "cookie": "blahblah"
    // },
    username: "defunkt"
}, function(err, res) {
    console.log(JSON.stringify(res));
});
*/


}
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
 res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "D0loresH4ze"
  }]);

});

module.exports = router;
