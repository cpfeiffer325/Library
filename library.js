var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var list = library.playlists;
  for (var p in list) {
    console.log(`${list[p].id}: ${list[p].name} - ${list[p].tracks.length} tracks`);
  }
};

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var list = library.tracks;
  for (var t in list) {
    console.log(`${list[t].id}: ${list[t].name} by ${list[t].artist} (${list[t].album})`);
  }
};

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var currentP = library.playlists[playlistId];
  console.log(`${currentP.id}: ${currentP.name} - ${currentP.tracks.length} tracks`);
  var track = "";
  for (var i = 0; i < currentP.tracks.length; i++) {
    track = library.playlists[playlistId].tracks[i];
    var currentT = library.tracks[track];
    console.log(`${currentT.id}: ${currentT.name} by ${currentT.artist} (${currentT.album})`);
  }
};


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  console.log(library.playlists[playlistId].tracks);
};


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library

var addTrack = function (name, artist, album) {
  var newId = uid();
  library.tracks[newId] = {id: newId, name, artist, album};
};


// adds a playlist to the library

var addPlaylist = function (name) {
  var newId = uid();
  library.playlists[newId] = {id: newId, name, tracks: []};
};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {

// };

console.log("----------test printPlayLists------------------");
printPlaylists();

console.log("----------test printTracks---------------------");
printTracks();

console.log("----------test printPlayList-------------------");
printPlaylist("p01");

console.log("----------test add addTrackToPlaylist----------");
addTrackToPlaylist("t01", "p02");

console.log("----------test addTrack------------------------");
addTrack("Mr. Blue Sky", "Electric Light Orchestra", "Out of the Blue");
printTracks();

console.log("----------test addPlaylist---------------------");
addPlaylist("Workout Music");
printPlaylists();
