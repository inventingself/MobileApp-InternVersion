import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuidedMeditationPage } from './guided-meditation';

@NgModule({
  declarations: [
    GuidedMeditationPage,
  ],
  imports: [
    IonicPageModule.forChild(GuidedMeditationPage),
  ],
})
export class GuidedMeditationPageModule {}
