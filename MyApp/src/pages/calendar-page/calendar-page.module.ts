import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar-page';

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
  ],
  exports: [
    CalendarPage
  ]
})
export class CalendarPageModule {}