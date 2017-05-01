import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup-page/signup-page';

@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogInClicked() {
    console.log("log in pressed");
    this.navCtrl.setRoot(TabsPage);
  }

  onSignUpClicked() {
    console.log("sign up pressed");
    this.navCtrl.push(SignupPage);
  }

}
