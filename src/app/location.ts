import {Category} from "./category";
import {Coordinates} from "./coordinates";
export class Location {
  constructor(public name:string,public address:string,public coordinates:Coordinates,public category:Category){}
}
