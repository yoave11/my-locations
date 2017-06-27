import {Injectable} from "@angular/core";
import {Category} from "./category";

@Injectable()
export class CategoryService {

  private categories: Category[] = [
    new Category("aa"),
    new Category("cc"),
    new Category("bb"),
    new Category("dd"),
    new Category("ee"),
    new Category("ll"),
  ];

  getAllCategories(): Category[] {
    return this.categories;
  }

  addCategory(category: Category): void {
    this.categories.push(category);
  }

  deleteCategory(category: Category): void {
    let index: number = this.categories.indexOf(category);
    if (index !== -1) {
      this.categories.splice(index, 1);
    } else {
      console.log("tried to add out of bounds item");
    }
  }

  editCategory(oldCategory: Category, newCategory: Category): void {
    this.categories[this.categories.indexOf(oldCategory)] = newCategory;
  }

  isCategoryExist(category: Category): boolean {
    return this.categories.indexOf(category) !== 1;
  }
}
