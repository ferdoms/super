import { Component } from "@angular/core";
import { ViewController } from "ionic-angular";


@Component({
  template: `
    <ion-list>
      <ion-list-header>Ionic</ion-list-header>
      <button ion-item (click)="close()">Learn Ionic</button>
      <button ion-item (click)="close()">Documentation</button>
      <button ion-item (click)="close()">Showcase</button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `
})
export class PopoverWorkoutItem {
  constructor(public viewCtrl: ViewController) {}

  
  close(){
    this.viewCtrl.dismiss();
  
  }
}