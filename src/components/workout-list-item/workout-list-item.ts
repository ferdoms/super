import { Component, Input } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { PopoverWorkoutItem } from './popover';

@Component({
  selector: 'workout-list-item',
  templateUrl: 'workout-list-item.html'
})
export class WorkoutListItemComponent {

  @Input() data: any;

  constructor(public popoverCtrl: PopoverController) {
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverWorkoutItem);
    popover.present({
      ev: myEvent
    });
  }

}
