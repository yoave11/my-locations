import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Category} from "../../category";
import {CategoryService} from "../../category.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'my-locations-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  @Input() category: Category;
  @Output() doneEditting: EventEmitter<any> = new EventEmitter();
  private newCategory: Category;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.newCategory = Object.assign({}, this.category);
  }


  onSubmit(form: NgForm) {
    let newCategory = form.value;
    console.log("new category "+newCategory.name);
    console.log("old category "+this.category.name);
    if (this.categoryService.isCategoryExist(newCategory)) {
      alert("Category exists");
    } else {
      console.log("adding items");
      if (this.category.name == "") {
        this.categoryService.addCategory(newCategory);
      } else {
        this.categoryService.editCategory(this.category, newCategory);
      }
      this.doneEditting.emit(null);
    }

  }

  onCancelled() {
    this.doneEditting.emit(null);
  }

}
