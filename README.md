# liri-node-app
A node app used for finding songs, bands, and movies

Use the command line in Node.js to find out information about songs, bands, and movies!

First, to use this app, you must install "node_modules" as well as acquire your own "id" and "secret" keys from spotify to have full functionality. 

"node_modules" must be installed after node.js. To install, simply type "npm install" into the command line. The package.JSON file should have all of the necessary dependencies listed, so all appropriate files will be downloaded.

![npm_modules](./images/npminstall.png)

For the Spotify keys, it is strongly recommended that you create your own ".emv" file to include your id and secret under. To easily insert them into the app, it is strongly recommended that the id be named "SPOTIFY_ID", and that the secret be named "SPOTIFY_SECRET". 

![dotenv](./images/dotenv.png)

From the command prompt, operating the app is fairly simple, but character sensitive. Each type of query will be detailed below.

1. Finding concerts via "BandsInTown"

    To find concerts by a certain artist, "node liri.js concert-this <artist-name-here>" must be typed into the command prompt

![concert-this](/images/concert-this.png)

    Once that is done, a short list of information will be displayed right in the terminal including:

        The name of the venue they are playing at.

        The location of the venue.

        And, the date that they are playing.

![concert-this-executed](/images/concert-this-executed.png)

2. Finding songs via "Spotify"

    To find concerts by a certain song, "node liri.js spotify-this-song <song-name-here>" must be typed into the command prompt

![spotify-this-song](/images/spotify-this-song.png)

    Once that is done, a short list of information will be displayed in the terminal including:

        The artist(s) name.

        The song's name.

        A link to a preview of the song.

        And, the name of the album that the song is on.

![spotify-this-song-executed](/images/spotify-this-song-executed.png)

    It is possibly to not give a song name and still get a result. 

![spotify-this-song-no-argument](/images/spotify-this-song-no-argument.png)

    When no song is given, the app defaults to "The Sign" by Ace of Base.

![spotify-this-song-no-argument-executed](/images/spotify-this-song-no-argument-executed.png)

3. Finding songs via "OMDB"

    To find concerts by a certain movie, "node liri.js movie-this <movie-name-here>" must be typed into the command prompt

![movie-this](/images/movie-this.png)

    Once that is done, a short list of information will be displayed in the terminal including:

        The title of the movie.

        The year the movie came out.

        The IMDB Rating for the movie.

        The Rotten Tomatoes Rating of the movie.

        The country where the movie was produced.

        The language the movie was shot in.

        The plot of the movie.

        And the actors in the movie.

![movie-this-executed](/images/movie-this-executed.png)

    It is possibly to not give a movie name and still get a result. 

![movie-this-no-argument](/images/movie-this-no-argument.png)

    When no song is given, the app defaults to "Mr. Nobody".

![movie-this-no-argument-executed](/images/movie-this-no-argument-executed.png)

    It is also possible to feed the app information stored in a text file (.txt). To initiate the app to read and process the text file, "node liri.js do-what-it-says" must be typed in the command prompt.

![do-what-it-says](/images/do-what-it-says.png)

    It is necessary to put the desired text in a file called "random.text" in the same directory as the liri.js file for it to work, as is. Once the command is entered in the terminal, the text file gets read and the app performs the function described in the text file.

![do-what-it-says-executed](/images/do-what-it-says-executed.png)