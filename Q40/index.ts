// Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
//  Use the function to make three dictionaries representing different albums.
//  Print each return value to show that Objects are storing the album information correctly.
//  Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//  If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.

// Define an interface for the album object
interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional property
  }
  
  // Define a function that takes an artist name, an album title, and an optional number of tracks
  function make_album(artist: string, title: string, tracks?: number): Album {
    // Create an album object with the given parameters
    let album: Album = {artist, title};
    // If tracks is provided, add it to the album object
    if (tracks) {
      album.tracks = tracks;
    }
    // Return the album object
    return album;
  }
  
  // Use the function to make three albums with different parameters
  let album1 = make_album("Taylor Swift", "Red");
  let album2 = make_album("Ed Sheeran", "Divide", 16);
  let album3 = make_album("Adele", "25", 11);
  
  // Print each album object to show the result
  console.log(album1);
  console.log(album2);
  console.log(album3);
  