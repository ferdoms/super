
import { Injectable } from '@angular/core';
import { ApiProvider } from '@providers/api/api';
import { Storage } from '@ionic/storage';

@Injectable()
export class ExercisesProvider {

  constructor(public api: ApiProvider, public storage: Storage) {
    this.storage.get("categories")
      .then(data =>{
        if(!data){
          this.updateCategoryList();
        }
      });
  }

  all(){
    let exercises = [];
    return this.api.get('exercise/?language=2&limit=100&license_author=wger.de')
      .map((data) => {
        for(let item of data.results){
          exercises.push({
            id: item.id,
            name: item.name,
            category: item.category
          });
        } 
        return exercises;
      });
  }

  private updateCategoryList(){
    this.api.get('exercisecategory/')
      .subscribe((data) => {
        this.storage.set("categories", data.results) ;
      });

  }

  getCategories(){
    return this.storage.get("categories");
  }

}
