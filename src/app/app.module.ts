import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleDatePageComponent } from './pages/schedule-date.page/schedule-date.page.component';
import { HomePageComponent } from './pages/home.page/home.page.component';
import { WorkHoursFacade } from './pages/schedule-date.page/facades/work-hours.facade';
import { WorkDaysFacade } from './pages/schedule-date.page/facades/work-days.facade';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { SimpleModalComponent } from './shared/components/simple-modal/simple-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleDatePageComponent,
    HomePageComponent,
    ToolbarComponent,
    SimpleModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [WorkHoursFacade, WorkDaysFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
