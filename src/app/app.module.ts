import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleDatePageComponent } from './pages/schedule-date.page/schedule-date.page.component';
import { HomePageComponent } from './pages/home.page/home.page.component';
import { WorkHoursFacade } from './shared/facades/work-hours.facade';

@NgModule({
  declarations: [AppComponent, ScheduleDatePageComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [WorkHoursFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
