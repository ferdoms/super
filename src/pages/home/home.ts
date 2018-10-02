import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '@providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public api: ApiProvider) {
    this.api.get('exercisecategory')
      .subscribe(data => {
        console.log(data.results);
      })
  }

}
