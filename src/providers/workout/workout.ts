
import { Injectable } from '@angular/core';

@Injectable()
export class WorkoutProvider {
  key = 'workouts'
  constructor() {

    this.key = 'workout';
  }


}
