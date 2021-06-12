import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
=======
import { TooltipModule } from 'ngx-bootstrap/tooltip';
>>>>>>> edit bootstrap links
import { SmoothScrollingComponent } from './smooth-scrolling/smooth-scrolling.component';

@NgModule({
  declarations: [
    AppComponent,
    SmoothScrollingComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule
=======
    AppRoutingModule,
    TooltipModule.forRoot()
>>>>>>> edit bootstrap links
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
