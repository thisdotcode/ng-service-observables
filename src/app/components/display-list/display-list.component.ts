import { Component, OnInit } from '@angular/core';
import { MyListService } from 'src/app/services/my-list.service';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss'],
})
export class DisplayListComponent implements OnInit {
  listItems: string[] = [];
  constructor(private myListService: MyListService) {}

  ngOnInit() {
    // Subscribing to the observable $listItemChanged
    this.myListService.$listItemChanged.subscribe((status) => {
      // Accessing the updated listitems variable from service
      this.listItems = this.myListService.listItems;
    });
  }
}
