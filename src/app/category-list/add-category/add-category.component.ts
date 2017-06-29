import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Category} from "../../category";
import {NgForm} from "@angular/forms";
import {CategoryService} from "../../category.service";

@Component({
  selector: 'my-locations-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  @Input() category: Category;
  @Output() doneEditting: EventEmitter<any> = new EventEmitter();
  newCategory: Category;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.newCategory = Object.assign({}, this.category);
  }


  onSubmit(form: NgForm) {
    let newCategory = form.value;
    console.log("new category " + newCategory.name);
    console.log("old category " + this.category.name);
    if (this.categoryService.isValueExist(newCategory)) {
      alert("Category exists");
    } else {
      console.log("adding items");
      if (this.category.name == "") {
        this.categoryService.addValue(newCategory);
      } else {
        this.categoryService.editValue(this.category, newCategory);
      }
      this.doneEditting.emit(null);
    }

  }

  onCancelled() {
    this.doneEditting.emit(null);
  }

}
