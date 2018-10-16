import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { ExercisesProvider } from '@providers/exercises/exercises';
import { CreateWorkoutPage } from '@pages/create-workout/create-workout';
import { resolveDefinition } from '@angular/core/src/view/util';

@IonicPage()
@Component({
  selector: 'page-select-exercises',
  templateUrl: 'select-exercises.html',
})
export class SelectExercisesPage {
  items = [];
  callback: any;
  categories = []
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public exPrv: ExercisesProvider ) {
      this.exPrv.getCategories()
        .then((data) => this.categories = data);
      this.exPrv.all()
      .subscribe((data) => {
        this.items = data;
      })
  }
  ionViewWillEnter() {
    this.callback = this.navParams.get("callback");
}
  ionViewWillLeave() {
    let checkedItems = [];
    this.items
      .map(item => {
        
        if(item.checked){
          checkedItems.push(item);
          
        }
      })

      this.callback(checkedItems)
        .then(()=>{
          this.navCtrl.pop();
        });
  }
  getCategory(id){
    let name;
    this.categories.forEach(element => {
      if(element.id == id){
        name = element.name;
        return element.name;
      }
    });
   return name;
  }

}
