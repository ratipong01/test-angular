import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RmBuddyCardviewDetailComponent } from './rm-buddy/rm-buddy-cardview-detail/rm-buddy-cardview-detail.component';
import { RmBuddyCardviewComponent } from './rm-buddy/rm-buddy-cardview/rm-buddy-cardview.component';


@NgModule({
  declarations: [
    AppComponent,
    RmBuddyCardviewDetailComponent,
    RmBuddyCardviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
