import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { SearchHistoryItem } from '../../SearchHistoryItem';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit{
  historyItems: SearchHistoryItem[];
  page: number = 1;
  pageSize: number = 10;
  collectionSize: number;
  constructor(private local: LocalStorageService) {}

  ngOnInit(): void {
    this.historyItems = this.local.getLocal();
  }
}
