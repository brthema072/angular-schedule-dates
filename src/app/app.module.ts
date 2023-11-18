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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalScheduleDateComponent } from './pages/schedule-date.page/components/modal-schedule-date/modal-schedule-date.component';
import { SimpleToggleComponent } from './shared/components/simple-toggle/simple-toggle.component';
import { WeekViewComponent } from './pages/schedule-date.page/components/week-view/week-view.component';
import { MonthlyViewComponent } from './pages/schedule-date.page/components/monthly-view/monthly-view.component';
import { YearViewComponent } from './pages/schedule-date.page/components/year-view/year-view.component';
import { MonthlyDaysViewComponent } from './pages/schedule-date.page/components/monthly-view/monthly-days-view/monthly-days-view.component';
import { FormatDateFacade } from './shared/facades/format-date.facade';

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
    SimpleToggleComponent,
    WeekViewComponent,
    MonthlyViewComponent,
    YearViewComponent,
    MonthlyDaysViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [WorkHoursFacade, WorkDaysFacade, FormatDateFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
