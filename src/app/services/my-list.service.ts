import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyListService {
  public listItems: string[] = [];
  public $listItemChanged = new Subject<boolean>();
  public $itemStatus = new Subject<boolean>();
  constructor() {}

  public setListItem(listItem: string): void {
    if (listItem) {
      const val = listItem.trim().toLowerCase();
      if (this.listItems.indexOf(val) === -1) {
        // Updating the value of listItems
        this.listItems.push(val);
        // Emiting an Observable $listItemChanged
        this.$listItemChanged.next(true);

        this.$itemStatus.next(false);
      } else {
        this.$itemStatus.next(true);
      }
    }
  }
}
