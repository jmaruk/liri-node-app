require("dotenv").config();

var keys = require("./keys.js");
var Twitter = require('twitter');

var client = new Twitter(keys.twitter);

var task = process.argv[2];

if(task === 'my-tweets') {
  console.log("tweet somethin");
  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });
} else if ( task === 'spotify-this-song') {
  console.log("spotify coming soon");
} else {
  console.log("I don't know what that means.");
}
