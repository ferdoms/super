import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectExercisesPage } from '@pages/select-exercises/select-exercises';

@IonicPage()
@Component({
  selector: 'page-create-workout',
  templateUrl: 'create-workout.html',
})
export class CreateWorkoutPage {
  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  getDataCallBack = (_params) =>{
    return new Promise((resove, reject)=>{
      this.items = _params;
      console.log(this.items);
    })
  }
  selectExercises(){
    this.navCtrl.push(SelectExercisesPage, {
      'callback': this.getDataCallBack
    });
  }
  save(){
    console.log(this.items);
  }

}
