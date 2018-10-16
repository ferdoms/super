import { NgModule } from '@angular/core';
import { WorkoutListItemComponent } from './workout-list-item/workout-list-item';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [WorkoutListItemComponent],
	imports: [IonicModule, CommonModule],
	exports: [WorkoutListItemComponent]
})
export class ComponentsModule {}
