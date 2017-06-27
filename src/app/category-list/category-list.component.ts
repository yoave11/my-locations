import {Component, OnInit} from "@angular/core";
import {CategoryService} from "../category.service";
import {Category} from "../category";

@Component({
  selector: 'my-locations-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  private categories: Category[];
  private selectedCategory: Category = null;
  isAdding :boolean =false;


  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getAllCategories();
  }

  onSelect(category: Category) {
    this.selectedCategory = category;
  }
  onAddItem() {
    this.isAdding = true;
  }

  onDoneEditting(){
    this.isAdding = false;
  }

  newCategory():Category{
    return new Category("");
  }

}
