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
  private locations: Observable<Array<Location>>;
  private l:Location[] =[
    new Location("aa","bb",new Coordinates(33.4,34.5),new Category("ss")),
    new Location("aa","bb",new Coordinates(33.4,34.5),new Category("ss")),
    new Location("aa","bb",new Coordinates(33.4,34.5),new Category("ss")),
    new Location("aa","bb",new Coordinates(33.4,34.5),new Category("ss")),
    new Location("aa","bb",new Coordinates(33.4,34.5),new Category("ss")),
  ];
  private listState:ListState = new ListState();


  constructor(private locationService:LocationService,private categoryService:CategoryService) {
  }

  ngOnInit() {
  }

}
