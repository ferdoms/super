import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectExercisesPage } from './select-exercises';

@NgModule({
  declarations: [
    SelectExercisesPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectExercisesPage),
  ],
})
export class SelectExercisesPageModule {}
