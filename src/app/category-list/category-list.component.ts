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
export class CategoryListComponent implements OnInit{
  listState: ListState = new ListState();

  categories:Observable<Array<Category>>;
  constructor(private categoryService: CategoryService) {
      this
  }


  ngOnInit(): void {
    this.categories = this.categoryService.values;
  }


  newCategory(): Category {
    return new Category("");
  }

  onDelete(){
    this.listState.onDelete(this.categoryService);
  }

}
