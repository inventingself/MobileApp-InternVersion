import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-take5',
  templateUrl: 'take5.html',
})
export class Take5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Take5Page');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
