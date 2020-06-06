import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyListService {
  public listItems: string[] = [];
  public $listItem = new Subject<boolean>();
  public $itemStatus = new Subject<boolean>();
  constructor() {}

  public setListItem(listItem: string): void {
    if (listItem) {
      const val = listItem.trim().toLowerCase();
      if (this.listItems.indexOf(val) === -1) {
        this.listItems.push(val);
        this.$listItem.next(true);
        this.$itemStatus.next(false);
      } else {
        this.$itemStatus.next(true);
      }
    }
  }
}
