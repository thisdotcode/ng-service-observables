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
    this.myListService.$listItem.subscribe((status) => {
      this.listItems = this.myListService.listItems;
    });
  }
}
