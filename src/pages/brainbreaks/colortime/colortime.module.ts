import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColortimePage } from './colortime';

@NgModule({
  declarations: [
    ColortimePage,
  ],
  imports: [
    IonicPageModule.forChild(ColortimePage),
  ],
})
export class ColortimePageModule {}
