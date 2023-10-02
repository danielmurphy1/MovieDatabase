import { Injectable } from '@angular/core';
import { SearchHistoryItem } from '../SearchHistoryItem';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveLocal(item: SearchHistoryItem): void{
    localStorage.setItem(item.searchString, JSON.stringify(item))
  }

  getLocal(): SearchHistoryItem[] {
    //this item stops parsing of values and has to be removed
    localStorage.removeItem("loglevel");
    const itemsArray: SearchHistoryItem[] = [];
    for (let [key, value] of Object.entries(localStorage)) {
      let parsed = JSON.parse(value);
      //this will only match for items in local storage from searching
      if (key === parsed.searchString){
        itemsArray.push(parsed);
      }
    }
    return itemsArray;
  }
}
