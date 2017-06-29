import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {ValueStore} from "./value.service";
import {AddCategoryComponent} from "./category-list/add-category/add-category.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {LocationListComponent} from "./location-list/location-list.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {routing} from "./app.routes";
import {CategoryService} from "./category.service";
import {APP_CONFIG} from "./app.config";
import {AddLocationComponent} from "./location-list/add-location/add-location.component";
import {CATEGORY_DI_CONFIG} from "./category-config";
import { FilterCategoryPipe } from './location-list/filter-category.pipe';
import { SortPipePipe } from './location-list/sort-pipe.pipe';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    AddCategoryComponent,
    LocationListComponent,
    NavBarComponent,
    AddLocationComponent,
    FilterCategoryPipe,
    SortPipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBp2EVsrkUYoE_HXJ_Lv9odwLctpLuzFF8'
    }),

  ],
  providers: [ValueStore, {provide: APP_CONFIG, useValue: CATEGORY_DI_CONFIG},
    {
      provide: CategoryService,
      useClass: ValueStore
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
