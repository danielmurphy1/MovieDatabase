import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit{
  movieName: string;

  constructor() {}

  ngOnInit(): void {
    
  }
}
