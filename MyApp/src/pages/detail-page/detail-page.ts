import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Friend } from '../../app/friend.model';
import { FriendService } from '../../app/friend.service';

@IonicPage()
@Component({
  selector: 'page-detail-page',
  templateUrl: 'detail-page.html',
})
export class DetailPage {
  friend: Friend;
  relationships: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private friendService: FriendService) {
    const friendId = navParams.get('friendId');
    this.relationships = friendService.relationships;
    this.friend = {
      name: "",
      relationship: "",
      latitude: 0,
      longitude: 0
    };
    if (friendId) {
      friendService.getFriend(friendId).then(friend => this.friend = friend);
    }
  }

  onSave() {
    if (this.friend.id) {
      this.friendService.updateFriend(this.friend);
    } else {
      this.friendService.addFriend(this.friend);
    }
    this.navCtrl.pop();
  }

  onTrash() {
    let confirm = this.alertCtrl.create({
      title: 'Delete Friend',
      message: 'Are you sure you want to delete this friend? This contact can not be recovered after this action.',
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Delete',
          handler: () => {
            this.friendService.removeFriend(this.friend.id);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
