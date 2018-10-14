import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectExercisesPage } from '@pages/select-exercises/select-exercises';
import { CreateWorkoutPage } from '@pages/create-workout/create-workout';
// import {}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    // this.exercisesProvider.all()
    //   .subscribe(data => {
        
    // //   })
    // console.log(wktModel.all());
    // wktModel.save({name:"workout d"});
    // console.log(wktModel.getLastId());


  }
  exercisesPage(){
    this.navCtrl.push(SelectExercisesPage);
  }

  addWorkout(){
    this.navCtrl.push(CreateWorkoutPage);
  }
}
