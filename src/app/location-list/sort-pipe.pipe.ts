import { Pipe, PipeTransform } from '@angular/core';
import {Location } from "../location";
@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(value: Location[], args?: any): any {
    if(args.length == 0){
      console.log("no args to filter");
      return value;
    }
    console.log("got "+args);
    console.log("try to sort");
    if( args==='word'){
      console.log("alephabet sort");
      this.sortByWord(value);
    }

    if( args==='group'){
      console.log("group sort");
      this.sortByGroup(value);
    }

    return value;
  }

  private sortByWord(value: Location[]){
    value.sort((l1,l2)=>{
        if(l1.name > l2.name){
          return 1;
        }
        if(l1.name < l2.name){
          return -1;
        }
        return 0;
      }
    );
  }


  private sortByGroup(value: Location[]){
    value.sort((l1,l2)=>{
        if(l1.category.name > l2.category.name){
          return 1;
        }
        if(l1.category.name < l2.category.name){
          return -1;
        }
        return 0;
      }
    );
  }

}
