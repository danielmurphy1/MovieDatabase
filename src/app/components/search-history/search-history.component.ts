import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit{
  historyItems = [
    {
      searchString: "Test", 
      date: new Date().toLocaleString(),
      results: 17
    },
    {
      searchString: "Test1", 
      date: new Date().toLocaleString(),
      results: 17
    },
    {
      searchString: "Test2", 
      date: new Date().toLocaleString(),
      results: 17
    },
  ]
  constructor() {}

  ngOnInit(): void {
    
  }
}
