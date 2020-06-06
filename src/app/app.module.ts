import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GetInputComponent } from './components/get-input/get-input.component';
import { DisplayListComponent } from './components/display-list/display-list.component';

@NgModule({
  declarations: [AppComponent, GetInputComponent, DisplayListComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
