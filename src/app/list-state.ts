import {ValueStore} from "./value.service";
export class ListState {
  public selectedItem: any = null;
  public isAdding: boolean = false;
  public isEditting: boolean = false;

  onSelect(value: any) {
    if (!this.isEditting && !this.isAdding) {
      this.selectedItem = value;
      console.log("selected value: " + JSON.stringify(value));
    }
  }

  onAddItem() {
    if (this.isEditting) {
      alert("please finish editting!");
    } else {
      this.selectedItem = null;
      this.isAdding = true;
    }
  }

  onDoneAdding() {
    this.isAdding = false;
  }

  onEditItem() {
    if (this.isAdding) {
      alert("Finish adding item!");
    } else if (this.selectedItem === null) {
      alert("Please select an item!");
    } else {
      this.isEditting = true;
    }
  }

  isEditMode(value: any) {
    return this.selectedItem == value && this.isEditting;
  }

  onDoneEditting() {
    this.isEditting = false;
    this.isAdding = false;
  }

  onDelete(valueStore: ValueStore) {

    if (this.isEditting || this.isAdding) {
      alert("Please finish editing");
    } else if (this.selectedItem === null) {
      alert("Please select an item!");
    }
    else {
      valueStore.deleteValue(this.selectedItem);
      this.selectedItem = null;
    }
  }
}
