import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { MyListService } from 'src/app/services/my-list.service';

@Component({
  selector: 'app-get-input',
  templateUrl: './get-input.component.html',
  styleUrls: ['./get-input.component.scss'],
})
export class GetInputComponent implements OnInit, AfterViewInit {
  inputValue: string;
  displayError = false;
  @ViewChild('inputEl', { static: false }) inputEl: ElementRef;

  constructor(private myListService: MyListService) {}

  ngOnInit() {
    this.myListService.$itemStatus.subscribe((status) => {
      this.setItemStatus(status);
    });
  }

  public addItem(): void {
    // Setting value to listItems variable present in service
    this.myListService.setListItem(this.inputValue);
    this.resetInput();
  }

  public setItemStatus(status: boolean): void {
    this.displayError = status;
  }

  public enableAddBtn(): boolean {
    return !(this.inputValue && this.inputValue.trim().length > 0);
  }

  private resetInput(): void {
    this.inputValue = '';
    this.inputEl.nativeElement.focus();
  }

  ngAfterViewInit() {
    this.inputEl.nativeElement.focus();
  }
}
