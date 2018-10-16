import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'getName',
})
export class GetNamePipe implements PipeTransform {

  transform(value: any, id) {
    
    return value.forEach(element => {
      if(element.id == id){
        console.log(element, id);
        return element.name;
      }
    });

  }
}
