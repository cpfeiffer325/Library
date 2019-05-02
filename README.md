# Library Assignment

## Goal
The goal of this exercise is to continue practicing the your ability to work with arrays and objects.

## Exercise
You are going to implement a program that manages music playlists using objects and arrays.

The program will consist of:

an object, the library, that will store all the information about tracks and playlists
a collection of functions that will perform certain operations on the library, for example addPlaylist
The library object is structured like this:

var library = {
  tracks: { 123: { id: 123,
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            456: { id: 456,
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"}
          },

  playlists: { 789: { id: 789,
                      name: "Coding Music",
                      tracks: [123, 456]
                    }
             }
};
You will need to implement the following functions:

printPlaylists
printTracks
printPlaylist
addTrackToPlaylist
addTrack
addPlaylist
printSearchResults (stretch)

###

get one function working before moving onto the next
write some test code for each of the functions
commit frequently!
feel free to create extra functions


