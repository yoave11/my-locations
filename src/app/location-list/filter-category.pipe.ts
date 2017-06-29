import {Pipe, PipeTransform} from "@angular/core";
import {Location } from "../location";
@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(value: Location[], args?: any): any {
    console.log("try to filter");
    if(args.length == 0){
      console.log("no args to filter");
      return value;
    }
    var array= value.filter((location=>{
      return location.category.name == args;
    }));
    console.log("filtered array: "+JSON.stringify(array));
    return array;

  }

}
