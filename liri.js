require("dotenv").config();

//Require Request
let request = require("request");

//Link Key Page
const keys = require("./keys.js");

//Initialize Spotify
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);