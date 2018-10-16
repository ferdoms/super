import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectExercisesPage } from '@pages/select-exercises/select-exercises';
import { WorkoutProvider } from '@providers/workout/workout';

@IonicPage()
@Component({
  selector: 'page-create-workout',
  templateUrl: 'create-workout.html',
})
export class CreateWorkoutPage {
  items = [];
  workout = {
    name: "",
    exercises_sets: []

  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public workoutPrv: WorkoutProvider) {
  }
  getDataCallBack = (_params) =>{
    return new Promise((resove, reject)=>{
      this.items = _params;
    })
  }
  selectExercises(){
    this.navCtrl.push(SelectExercisesPage, {
      'callback': this.getDataCallBack
    });
  }
  save(){
    this.items
      .map(items => {
        this.workout.exercises_sets.push({exercise_ID: items.id});
        this.workoutPrv.create(this.workout);
      });
      this.navCtrl.pop();

  }

}
