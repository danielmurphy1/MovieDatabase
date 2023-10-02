import { Component, OnInit } from '@angular/core';
import { Movie } from '../../Movie';
import { MoviesDatabaseService } from '../../services/movies-database.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { SearchHistoryItem } from '../../SearchHistoryItem';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  passedData: string;
  pageSize: number = 10;
  page: number = 1;
  collectionSize: number;

  constructor(private moviesDatabaseService: MoviesDatabaseService, private localService: LocalStorageService){}

  ngOnInit(): void {
    
  }

  searchMovies(searchString: string, page: number){
    this.passedData = searchString.trim();
    this.page = page;
    console.log("Passed Data", this.passedData)
    console.log("this.page", this.page)
    console.log("page parameter", page)
    this.moviesDatabaseService.searchMovies(searchString, page).subscribe((response)=> {
      if(response.Response === "False"){
        alert("Not Found. Check your search text.");
        this.resetValues();
        return;
      }
      this.collectionSize = Number(response.totalResults);
      this.movies = [ ...response.Search ];
      //has to be called as part of the response parse so that collectionSize goes to local storage correctly
      this.saveToLocalStorage();
    });
  }

  resetValues(): void{
    this.passedData = '';
    this.movies = [];
    this.collectionSize = 0;
  }

  saveToLocalStorage(): void{
    const item: SearchHistoryItem = {
      searchString: this.passedData,
      date: new Date().toLocaleString(), 
      results: this.collectionSize
    }
    this.localService.saveLocal(item)
  }
}
