const dotenv = require("dotenv").config();

const Spotify = require('node-spotify-api');

const request = require('request');

const moment = require('moment'); 

const keys = require("./keys")

const spotify = new Spotify(keys.spotify);

process.argv.splice(0,2);

// * `concert-this`

// * `spotify-this-song`
 
spotify.search({ type: 'track', query: 'Expectations' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
// * `movie-this`

// * `do-what-it-says`