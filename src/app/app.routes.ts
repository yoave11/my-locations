import {Routes, RouterModule} from "@angular/router";
import {CategoryListComponent} from "./category-list/category-list.component";
import {LocationListComponent} from "./location-list/location-list.component";
const APP_ROUTES: Routes = [
  {path: 'category-list', component: CategoryListComponent, pathMatch: 'full'},
  {path: 'location-list', component: LocationListComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'category-list', pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
