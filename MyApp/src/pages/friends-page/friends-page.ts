import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail-page/detail-page';
import { FriendService } from '../../app/friend.service';
import { Friend } from '../../app/friend.model';

@IonicPage()
@Component({
  selector: 'page-friends-page',
  templateUrl: 'friends-page.html',
})
export class FriendsPage {
  friends: Friend[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private friendService: FriendService) {
    
  }

  ionViewWillEnter() {
    this.friendService.getFriends().then(friends => this.friends = friends);
  }

  onAddFriendsClicked() {
    this.navCtrl.push(DetailPage);
  }

  onItemClicked(friend) {
    this.navCtrl.push(DetailPage, {friendId:friend.id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }

}
