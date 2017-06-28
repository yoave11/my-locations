import {Component, OnInit} from "@angular/core";
import {Category} from "../category";
import {Observable} from "rxjs";
import {CategoryService} from "../category.service";
import {ListState} from "../list-state";

@Component({
  selector: 'my-locations-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent{

  private listState: ListState = new ListState();

  constructor(private categoryService: CategoryService) {

  }


  newCategory(): Category {
    return new Category("");
  }

}
