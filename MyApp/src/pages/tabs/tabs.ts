import { Component } from '@angular/core';

import { FriendsPage } from '../friends-page/friends-page';
import { CalendarPage } from '../calendar-page/calendar-page';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FriendsPage;
  tab3Root = CalendarPage;

  constructor() {

  }
}
