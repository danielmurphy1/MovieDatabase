import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit{
  movieName: string;
  @Output() onSearchMovies: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    
  }

  handleSearchButtonClick(searchString: string): void{
    console.log(searchString)
    this.onSearchMovies.emit(searchString);
  }
}
