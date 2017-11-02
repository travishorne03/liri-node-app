var fs = requeire("fs");

var twitCred = require("./keys.js");

//console.log(twitCred);

var twitter = require("twitter");

var request = require("request");

//console.log(process.argv);

var Spotify = require('node-spotify-api');

var liriType = process.argv[2];
var liriSearch= process.argv[3];

console.log(liriType);


var client = new twitter({
    consumer_key: twitCred.twitterKeys.consumer_key,
    consumer_secret: twitCred.twitterKeys.consumer_secret,
    access_token_key: twitCred.twitterKeys.access_token_key,
    access_token_secret: twitCred.twitterKeys.access_token_secret
});

switchKey (liriType,liriSearch);

function switchKey(liriType,liriSearch) {

switch (liriType) {
        case 'my-tweets':
        tweets();
        break;

        case 'spotify':
        songs(liriSearch);
        break;

        case 'Movie':
        movies();
        break;

        case 'Random':
        random();
        break;
 }
}



function tweets(){
  console.log("twitter function");

  var twitHandle = process.argv = '@yourtwitterhandle';
	var params = { screen_name: liriSearch };

	client.get('statuses/user_timeline', params, function(err, tweets, response) {
	    if  (err)  {        
	        console.log('Error occurred: '  +  error);      
	        return;    
	    }

	    //console.log(tweets);
      for (var i = 0; i < tweets.length; i++) {
	        console.log('\r\n--------Tweet #' + (i + 1) + ' - Sent ' + tweets[i].created_at + '--------');
	        console.log(tweets[i].text);
	        console.log('----------------------------------------------------------------------');
	        console.log(' ');
	    }
	    console.log('\r\n================================================================');

	});
}

function songs(songName){

  if (songName==null){
    songName = 'the%20sign';
  }

 console.log("Searching for: " + songName);       //BONUS: APPEND TO PAGE
 console.log("----------------");

 appendFile("Searching for: " + songName);
 appendFile("----------------");

  var spotifyB = new Spotify({
    id: "0ab15ee48a3049228d0530eb1fec7316",
    secret: 'cdfb68150a7f4be380761c116c8176da'
  });

  spotifyB.search({type: 'track', query: songName}).then(function(response){
    console.log(JSON.stringify(response));
  }).catch(function(err){
    console.log(err);
  });


  var searchedTrack = [];
  var dataItems = data.track.items;

  for (var i=0; i<20; i++){
    if (data.tracks.items[i].name == songName){
      searchedTrack.push(i);
    }
  }


  console.log(searchedTrack.length + "Tracks found in your search");

  if (serachedTrack.length > 0){
  console.log("Track: " + dataItems[serachedTrack[0]].name);
  console.log("Artist: " + dataItems[serachedTrack[0]].artists[0].name);
  console.log("Album: " + dataItems[serachedTrack[0]].album.name);
  console.log("Spotify link: " + dataItems[serachedTrack[0]].external_urls.spotify);


appendFile("Track: " + dataItems[matchedTracks[0]].name);
appendFile("Artist: " + dataItems[matchedTracks[0]].artists[0].name);
appendFile("Album: " + dataItems[matchedTracks[0]].album.name);
appendFile("Spotify link: " + dataItems[matchedTracks[0]].external_urls.spotify);
}

else if (serachedTrack.length == 0){
  console.log("Sorry, but spotify does not contain that song in their database :(");

}

});

}
