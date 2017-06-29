import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {NgForm, FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Location} from "../../location";
import {LocationService} from "../../location.service";
import {CategoryService} from "../../category.service";
import {Observable} from "rxjs";
import {Category} from "../../category";

@Component({
  selector: 'my-locations-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

  @Input() location: Location;
  @Output() doneEditting: EventEmitter<any> = new EventEmitter();
  newLocation: Location;
  categories: Observable<Array<Category>>;
  form: FormGroup;
  isEdit:boolean;

  constructor(private locationService: LocationService, private categoryService: CategoryService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.isEdit = this.location.name !== "";
    this.categories = this.categoryService.values;
    this.newLocation = Object.assign({}, this.location);
    this.form = this.fb.group({
      name: [this.location.name, Validators.required],
      category: this.fb.group({
        name: [this.location.category.name, [Validators.required]]
      }),
      address: [this.location.address, Validators.required],
      coordinates: this.fb.group({
        lat: [this.location.coordinates.lat, [Validators.required]],
        long: [this.location.coordinates.long, [Validators.required]]
      }),

    });
  }

  onSubmit() {
    console.log("form " + JSON.stringify(this.form.value));
    if(!this.isEdit){
      if (this.locationService.isValueExist(this.form.value)) {
        alert("Location exists");
      }else {
        this.locationService.addValue(this.form.value);
        this.doneEditting.emit(null);
      }
    }else{
      this.locationService.editValue(this.location, this.form.value);
      this.doneEditting.emit(null);
    }
  }

  onCancelled() {
    this.doneEditting.emit(null);
  }
}
