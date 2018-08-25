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

  getSongs() {
    return songs.filter(song => song.artistId === this.id);
  }

  getGenres() {
    return this.getSongs().map(song => song.genre());
  }
}

class Song {
  constructor(title, artistId, genreId) {
    this.title = title;
    this.id = ++songId;
    this.artistId = artistId;
    this.genreId = genreId;
    songs.push(this);
  }

  genre() {
    return genres.find(genre => genre.id === this.genreId);
  }

  artist() {
    return artists.find(artist => artist.id === this.artistId);
  }
}

class Genre {
  constructor(name) {
    this.name = name;
    this.id = ++genreId;
    genres.push(this);
  }

  getSongs() {
    return songs.filter(song => song.genreId === this.id);
  }

  getArtists() {
    return this.getSongs().map(song => song.artist());
  }
}
