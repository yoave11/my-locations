import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Category} from "../../category";
import {CategoryService} from "../../category.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'my-locations-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  @Input() category:Category;
  @Output() doneEditting:EventEmitter<any> = new EventEmitter();

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm){
      console.log(form.value);
      this.categoryService.addCategory(form.value);
      this.doneEditting.emit(null);
  }
  onCancelled(){
    this.doneEditting.emit(null);
  }

}
