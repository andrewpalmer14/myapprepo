import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindfriendsPage } from './findfriends-page';

@NgModule({
  declarations: [
    FindfriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(FindfriendsPage),
  ],
  exports: [
    FindfriendsPage
  ]
})
export class FindfriendsPageModule {}
