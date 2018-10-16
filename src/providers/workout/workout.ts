
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class WorkoutProvider {
  key = 'workouts';
  index = this.key.concat('_index');
  constructor(public storage: Storage) {
    if(!(this.storage.get(this.index))){
      this.storage.set(this.index, 0);
    }
  }

  all(){
    return this.storage.get(this.key);
  }
  get(){
    
  }
  create(item:any){
    let data = [];
    this.autoIncrement().then(ai => {
      item.id = ai;
      this.storage.get(this.key)
        .then(result => {
          if(result){
          data = result;}
          data.push(item);
          this.storage.set(this.key, data);
        });
    })
  }
  update(){}
  delete(id: number){
  }
  getLastId(){
    let lastID = null;
    return this.storage.get(this.index)
      .then((result) => {
        if(result){
        lastID = result;
        return lastID;
      }
      return 0;
      });

  }
  autoIncrement(){
    let ai;
    return this.getLastId().then((result) => {
      ai = result;
      ai = ai + 1;
      this.storage.set(this.index, ai);
      return ai;
    });
    
  }



}
