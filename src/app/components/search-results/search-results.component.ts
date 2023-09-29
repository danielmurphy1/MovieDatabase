import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../Movie';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() inboundMovies: Movie[];
  imdbAddress: string = "https://imdb.com/title/";
  constructor() {}

  ngOnInit(): void {
    
  }
}
