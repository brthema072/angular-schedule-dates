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
import { LoginPageComponent } from './pages/login.page/login.page.component';
import { RegisterPageComponent } from './pages/register.page/register.page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalScheduleDateComponent } from './pages/schedule-date.page/modal-schedule-date/modal-schedule-date.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleDatePageComponent,
    HomePageComponent,
    ToolbarComponent,
    SimpleModalComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ModalScheduleDateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [WorkHoursFacade, WorkDaysFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
