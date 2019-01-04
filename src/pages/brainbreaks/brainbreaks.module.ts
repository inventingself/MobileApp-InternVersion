import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrainbreaksPage } from './brainbreaks';

// import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BrainbreaksPage
  ],
  imports: [
    IonicPageModule.forChild(BrainbreaksPage),


    // ComponentsModule
  ],
})
export class BrainbreaksPageModule {}
