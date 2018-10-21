require("dotenv").config();

const Spotify = require('node-spotify-api');

const request = require('request');

const moment = require('moment'); 

const keys = require("./keys");

const fs = require("fs");

const spotify = new Spotify(keys.spotifyKeys);

process.argv.splice(0,2);

let primaryArg = process.argv[0];

let secondArg = process.argv.slice(1).join(" ");

const divider = "\n------------------------------------------------------------\n\n"

if (primaryArg === "do-what-it-says") {

  fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }
  
    var dataArr = data.split(",");
    console.log(dataArr)

    let primaryArg = dataArr[0];

    let secondArg = dataArr[1];

    switch (primaryArg) {
      // * `concert-this`
        case "concert-this":
        
        function bandsInTown() {
      
          bandsURL = "https://rest.bandsintown.com/artists/" + secondArg + "/events?app_id=codingbootcamp";
      
          request(bandsURL, function(err, response, body) {
              let jsonData = JSON.parse(body);
      
              let artistData = [
                "Venue: " + jsonData[0].venue.name,
                "Location: " + jsonData[0].venue.city + ", " + jsonData[0].venue.region,
                "Date: " + moment(jsonData[0].datetime).format("MM/DD/YYYY")
      
              ].join("\n\n");
      
              fs.appendFile("log.txt", artistData + divider, function(err) {
                if (err) throw err;
                console.log("\n", artistData);
              });
          });
      
        };
      
        bandsInTown();
        break;
      // * `spotify-this-song`
        case "spotify-this-song":
      
        
        if (secondArg === "") {
          secondArg = "The Sign"
      
          spotify.search({ type: "track", query: secondArg }, function(err, data) {
      
            let spotifyData = [
              "Artist: " + data.tracks.items[7].album.artists[0].name,
              "Name: " + data.tracks.items[7].name,
              "Preview: " + data.tracks.items[7].preview_url,
              "Album: " + data.tracks.items[7].album.name,
            ].join("\n\n");
        
            fs.appendFile("log.txt", spotifyData + divider, function(err) {
              if (err) throw err;
              console.log("\n",spotifyData);
            });
          });
        }
        
        else {
          spotify.search({ type: "track", query: secondArg }, function(err, data) {
      
            let spotifyData = [
              "Artist: " + data.tracks.items[0].album.artists[0].name,
              "Name: " + data.tracks.items[0].name,
              "Preview: " + data.tracks.items[0].preview_url,
              "Album: " + data.tracks.items[0].album.name,
            ].join("\n\n");
      
            fs.appendFile("log.txt", spotifyData + divider, function(err) {
              if (err) throw err;
              console.log("\n",spotifyData);
            });
          })};
        break;
      
      // * `movie-this`
        case "movie-this":
      
        function omdb() {
      
      
          let movieURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + secondArg;
      
          if (secondArg === "") {
            
            let movieURL = "http://www.omdbapi.com/?apikey=trilogy&t=Mr.Nobody"
      
          request(movieURL, function(err, response, body) {
            let jsonData = JSON.parse(body);
      
            let movieData = [
              "Title: " + jsonData.Title,
              "Release Year: " + jsonData.Year,
              "IMDB rating: " + jsonData.imdbRating,
              "Rotten Tomatoes rating: " + jsonData.Ratings[1].Value,
              "Country Where Movie was Produced: " + jsonData.Country,
              "Language: " + jsonData.Language,
              "Plot: " + jsonData.Plot,
              "Actors: " + jsonData.Actors
            ].join("\n\n");
      
            fs.appendFile("log.txt", movieData + divider, function(err) {
              if (err) throw err;
              console.log("\n",movieData);
            });
          })}
      
          else {
      
          request(movieURL, function(err, response, body) {
            let jsonData = JSON.parse(body);
      
            let movieData = [
              "Title: " + jsonData.Title,
              "Release Year: " + jsonData.Year,
              "IMDB rating: " + jsonData.imdbRating,
              "Rotten Tomatoes rating: " + jsonData.Ratings[1].Value,
              "Country Where Movie was Produced: " + jsonData.Country,
              "Language: " + jsonData.Language,
              "Plot: " + jsonData.Plot,
              "Actors: " + jsonData.Actors
            ].join("\n\n");
      
            fs.appendFile("log.txt", movieData + divider, function(err) {
              if (err) throw err;
              console.log("\n",movieData);
            });
          })};
        };
        omdb();
        break;
      

  
  }});
}

else {

switch (primaryArg) {
// * `concert-this`
  case "concert-this":
  
  function bandsInTown() {

    bandsURL = "https://rest.bandsintown.com/artists/" + secondArg + "/events?app_id=codingbootcamp";

    request(bandsURL, function(err, response, body) {
        let jsonData = JSON.parse(body);

        let artistData = [
          "Venue: " + jsonData[0].venue.name,
          "Location: " + jsonData[0].venue.city + ", " + jsonData[0].venue.region,
          "Date: " + moment(jsonData[0].datetime).format("MM/DD/YYYY")

        ].join("\n\n");

        fs.appendFile("log.txt", artistData + divider, function(err) {
          if (err) throw err;
          console.log("\n", artistData);
        });
    });

  };

  bandsInTown();
  break;
// * `spotify-this-song`
  case "spotify-this-song":

  
  if (secondArg === "") {
    secondArg = "The Sign"

    spotify.search({ type: "track", query: secondArg }, function(err, data) {

      let spotifyData = [
        "Artist: " + data.tracks.items[7].album.artists[0].name,
        "Name: " + data.tracks.items[7].name,
        "Preview: " + data.tracks.items[7].preview_url,
        "Album: " + data.tracks.items[7].album.name,
      ].join("\n\n");
  
      fs.appendFile("log.txt", spotifyData + divider, function(err) {
        if (err) throw err;
        console.log("\n",spotifyData);
      });
    });
  }
  
  else {
    spotify.search({ type: "track", query: secondArg }, function(err, data) {

      let spotifyData = [
        "Artist: " + data.tracks.items[0].album.artists[0].name,
        "Name: " + data.tracks.items[0].name,
        "Preview: " + data.tracks.items[0].preview_url,
        "Album: " + data.tracks.items[0].album.name,
      ].join("\n\n");

      fs.appendFile("log.txt", spotifyData + divider, function(err) {
        if (err) throw err;
        console.log("\n",spotifyData);
      });
    })};
  break;

// * `movie-this`
  case "movie-this":

  function omdb() {


    let movieURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + secondArg;

    if (secondArg === "") {
      
      let movieURL = "http://www.omdbapi.com/?apikey=trilogy&t=Mr.Nobody"

    request(movieURL, function(err, response, body) {
      let jsonData = JSON.parse(body);

      let movieData = [
        "Title: " + jsonData.Title,
        "Release Year: " + jsonData.Year,
        "IMDB rating: " + jsonData.imdbRating,
        "Rotten Tomatoes rating: " + jsonData.Ratings[1].Value,
        "Country Where Movie was Produced: " + jsonData.Country,
        "Language: " + jsonData.Language,
        "Plot: " + jsonData.Plot,
        "Actors: " + jsonData.Actors
      ].join("\n\n");

      fs.appendFile("log.txt", movieData + divider, function(err) {
        if (err) throw err;
        console.log("\n",movieData);
      });
    })}

    else {

    request(movieURL, function(err, response, body) {
      let jsonData = JSON.parse(body);

      let movieData = [
        "Title: " + jsonData.Title,
        "Release Year: " + jsonData.Year,
        "IMDB rating: " + jsonData.imdbRating,
        "Rotten Tomatoes rating: " + jsonData.Ratings[1].Value,
        "Country Where Movie was Produced: " + jsonData.Country,
        "Language: " + jsonData.Language,
        "Plot: " + jsonData.Plot,
        "Actors: " + jsonData.Actors
      ].join("\n\n");

      fs.appendFile("log.txt", movieData + divider, function(err) {
        if (err) throw err;
        console.log("\n",movieData);
      });
    })};
  };
  omdb();
  break;
}};