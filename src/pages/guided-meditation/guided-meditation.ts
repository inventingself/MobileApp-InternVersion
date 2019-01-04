import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';



@IonicPage()
@Component({
  selector: 'page-guided-meditation',
  templateUrl: 'guided-meditation.html',
})
export class GuidedMeditationPage {

  tracks: any;
  playing: boolean = true;
  currentTrack: any;
  progressInterval: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio) {
    
    this.tracks = [
      {title: 'First Meditation', by: 'Julia', playing: false, progress: 0}
    ];

    this.currentTrack = this.tracks[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuidedMeditationPage');
  }

  playTrack(track){
    this.nativeAudio.preloadComplex('1stMeditation', 'assets/sounds/1st Meditation.mp3', 1, 1, 0);
 
    track.playing = true;
    this.currentTrack = track;

    // Simulate track playing
    this.progressInterval = setInterval(() => {

    track.progress < 100 ? track.progress++ : track.progress = 0;

    }, 1000);
  }

  pauseTrack(track){
 
    track.playing = false;
    clearInterval(this.progressInterval);

  }   
 
  nextTrack(){

  let index = this.tracks.indexOf(this.currentTrack);
  index >= this.tracks.length - 1 ? index = 0 : index++;

  this.playTrack(this.tracks[index]);

  } 

  prevTrack(){

  let index = this.tracks.indexOf(this.currentTrack);
  index > 0 ? index-- : index = this.tracks.length - 1;

  this.playTrack(this.tracks[index]);

  }
}
