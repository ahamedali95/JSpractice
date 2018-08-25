const artists = [];
const songs = [];
const genres = [];
let artistId = 0;
let songId = 0;
let genreId = 0;

class Artist {
  constructor(name) {
    this.name = name;
    this.id = ++artistId;
    artists.push(this);
  }

  retrieveTiles(songs) {
    return songs.map(song => song.title);
  }

  getSongs() {
    return this.retrieveTiles(songs.filter(song => song.artist_id === this.id));
  }

  retrieveGenreIds(songs) {
    return songs.map(song => song.genreId);
  }

  getGenres() {
    this.retrieveGenreIds(this.getSongs());
  }
}

const arRahman = new Artist("AR Rahman");
const anirudh = new Artist("Anirudh");

console.log(artists);

class Song {
  constructor(title, artistId, genreId) {
    this.title = title;
    this.id = ++songId;
    this.artistId = artistId;
    this.genreId = genreId;
    songs.push(this);
  }
}

class Genre {
  constructor(name) {
    this.name = name;
    this.id = ++id;
    genres.push(this);
  }
}
