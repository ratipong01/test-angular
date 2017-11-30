import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoService } from './service/to-do.service';
import { MyFilterPipe } from './search/my-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    MyFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
