
import { Injectable } from '@angular/core';
import { ApiProvider } from '@providers/api/api';


@Injectable()
export class ExercisesProvider {

  constructor(public api: ApiProvider) {
    
  }

  all(){
    let exercises = [];
    return this.api.get('exercise/?language=2&limit=100&license_author=wger.de')
      .map((data) => {
        for(let item of data.results){
          exercises.push({
            name: item.name,
            category: item.category
          });
        } 
        return exercises;
      });
  }

}
