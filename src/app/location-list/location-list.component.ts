import {Component, OnInit} from "@angular/core";
import {APP_CONFIG} from "../app.config";
import {LOCATION_DI_CONFIG} from "../location-config";
import {ValueStore} from "../value.service";
import {LocationService} from "../location.service";
import {CategoryService} from "../category.service";
import {Category} from "../category";
import {Observable} from "rxjs";
import {Location} from "../location";
import {Coordinates} from "../coordinates";
import {ListState} from "../list-state";

@Component({
  selector: 'my-locations-location-list',
  templateUrl: './location-list.component.html',
  providers: [
    {provide: APP_CONFIG, useValue: LOCATION_DI_CONFIG},
    {
      provide: LocationService,
      useClass: ValueStore
    }
  ],
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  locations: Observable<Array<Location>>;
  categories: Observable<Array<Category>>;
  listState:ListState = new ListState();
  filterName:string ="";
  sortType:string ="";


  constructor(private locationService:LocationService,private categoryService:CategoryService) {
  }

  ngOnInit() {
    this.locations = this.locationService.values;
    this.categories = this.categoryService.values;
  }

  getLocation(){
    if(this.listState.isAdding){
      return new Location("","",new Coordinates(0,0),new Category(""));
    }
      return this.listState.selectedItem;
  }

  onDelete(){
    this.listState.onDelete(this.locationService);
  }

  onChangeFilterWord(option:string){
    console.log("filter value: "+option);
    this.filterName = option;
  }
  onSortCommand(sortType:string){
    console.log("sort command with: "+ sortType);
    this.sortType = sortType;
  }

}
