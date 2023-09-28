import { Component, OnInit } from '@angular/core';
import { Movie } from '../../Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: "1977",
      imbdNumber: "tt0076759",
      poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
    },
    {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: "1980",
    imbdNumber: "tt0080684",
    poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: "1983",
    imbdNumber: "tt0086190",
    poster: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
    title: "Star Wars: Episode VII - The Force Awakens",
    year: "2015",
    imbdNumber: "tt2488496",
    poster: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
    },
    {
    title: "Star Wars: Episode I - The Phantom Menace",
    year: "1999",
    imbdNumber: "tt0120915",
    poster: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
    title: "Star Wars: Episode III - Revenge of the Sith",
    year: "2005",
    imbdNumber: "tt0121766",
    poster: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
    },
    {
    title: "Star Wars: Episode II - Attack of the Clones",
    year: "2002",
    imbdNumber: "tt0121765",
    poster: "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
    }
  ];
  constructor(){}

  ngOnInit(): void {
    
  }
}
