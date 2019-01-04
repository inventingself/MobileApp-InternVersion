import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-brainbreaks',
  templateUrl: 'brainbreaks.html',
})
export class BrainbreaksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad BrainbreaksPage');
  }

  take5Modal(){
    let profileModal = this.modalCtrl.create('Take5Page');
    profileModal.present();
  }

  chimeBreathModal(){
    let profileModal = this.modalCtrl.create('ChimebreathPage');
    profileModal.present();
  }

  colorTimeModal(){
    let profileModal = this.modalCtrl.create('ColortimePage');
    profileModal.present();
  }
}