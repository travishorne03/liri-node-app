var twitCred = require("./keys.js");

//console.log(twitCred);

var twitter = require("twitter");

var request = require("request");

//console.log(process.argv);

var liriType = process.argv[2];
var liriSearch= process.argv[3];

var client = new twitter({
    consumer_key: twitCred.twitterKeys.consumer_key,
    consumer_secret: twitCred.twitterKeys.consumer_secret,
    access_token_key: twitCred.twitterKeys.access_token_key,
    access_token_secret: twitCred.twitterKeys.access_token_secret
});

switch (liriType) {
        case 'Twitter':
        tweets();
        break;

        case 'Movie':
        movies();
        break;

        case 'Song':
        songs();
        break;

        case 'Random':
        random();
        break;
}

function tweets(){
  console.log("twitter function");

  var twitHandle = process.argv[3];
	var params = { screen_name: liriSearch };

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	    if  (error)  {        
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


function movies(){
  console.log("movie function");

}

function songs(){
  console.log("songs function");

}


function random(){
  console.log("random function");

}
