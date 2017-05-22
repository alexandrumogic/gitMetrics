import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CommitsComponent } from './commits/commits.component';
import { CommitsService } from './commits.service';

const ROUTES = [
  {
    path: '',
    redirectTo: 'commits',
    pathMatch: 'full'
  },
  {
    path: 'commits',
    component: CommitsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CommitsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CommitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
