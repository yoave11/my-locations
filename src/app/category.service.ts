import {Injectable} from "@angular/core";
import {Category} from "./category";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class CategoryService {


  private _categories: Category[] = [
  ];

  private _categoriesObservable: BehaviorSubject<Array<Category>> = new BehaviorSubject([]);
  constructor(){
  this.fetchData();
}


get categories():Observable<Array<Category>>{
  return this._categoriesObservable;
}
  getAllCategories(): Category[] {
    return this._categories;
  }

  addCategory(category: Category): void {
    // this._categories.push(category);
    this._categories.unshift(category);
    this.storeData();
    return this._categoriesObservable.next(this._categories);
  }

  deleteCategory(category: Category): void {
    let index: number = this.getIndex(category);
    if (index !== -1) {
      this._categories.splice(index, 1);
    } else {
      console.log("tried to add out of bounds item");
    }

    this.storeData();
    return this._categoriesObservable.next(this._categories);
  }

  editCategory(oldCategory: Category, newCategory: Category): void {
    this._categories[this.getIndex(oldCategory)] = newCategory;

    this.storeData();
    return this._categoriesObservable.next(this._categories);
  }

  isCategoryExist(category: Category): boolean {
    console.log("is category: " +category.name+ " exist?");
    return this.getIndex(category) !== -1 ;
  }

  private getIndex(category: Category): number {
    let index= this._categories.findIndex((c) => c.name === category.name);
    console.log("index: "+ index);
    return index;
  }

  private storeData(): void {
    console.log("storing data");
    localStorage.setItem("_categories", JSON.stringify(this._categories));
  }

  private fetchData(): void {
    if(localStorage.getItem("_categories") === null){
      this._categories = [];
    }else {
      console.log(localStorage.getItem("_categories"));
      this._categories = JSON.parse(localStorage.getItem("_categories"));
    }
    this._categoriesObservable.next(this._categories)
  }

}
