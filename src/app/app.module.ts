import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleDatePageComponent } from './pages/schedule-date.page/schedule-date.page.component';
import { HomePageComponent } from './pages/home.page/home.page.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleDatePageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
