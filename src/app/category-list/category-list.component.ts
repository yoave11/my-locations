import {Component, OnInit} from "@angular/core";
import {CategoryService} from "../category.service";
import {Category} from "../category";
import {Observable} from "rxjs";

@Component({
  selector: 'my-locations-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  private categories: Observable<Array<Category>>;
  private selectedCategory: Category = null;
  private isAdding: boolean = false;
  private isEditting: boolean = false;


  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categories = this.categoryService.categories;
  }

  onSelect(category: Category) {
    if (!this.isEditting && !this.isAdding) {
      this.selectedCategory = category;
    }
  }

  onAddItem() {
    if (this.isEditting) {
      alert("please finish editting!");
    } else {
      this.selectedCategory = null;
      this.isAdding = true;
    }
  }

  onDoneAdding() {
    this.isAdding = false;
  }

  newCategory(): Category {
    return new Category("");
  }

  onEditItem() {
    if (this.selectedCategory === null) {
      alert("Please select an item!");
    } else if (this.isAdding) {
      alert("Finish adding item!");
    } else {
      this.isEditting = true;
    }
  }

  isEditMode(category: Category) {
    return this.selectedCategory == category && this.isEditting;
  }

  onDoneEditting() {
    this.isEditting = false;
  }

  onDelete() {
    if (this.selectedCategory === null) {
      alert("Please select an item!");
    } else {
      this.categoryService.deleteCategory(this.selectedCategory);
      this.selectedCategory = null;
    }
  }

}
