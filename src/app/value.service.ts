import {Injectable, Inject} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {APP_CONFIG} from "./app.config";
import {AppConfig} from "./app.cofig.interface";

@Injectable()
export class ValueStore {


  private _values = [];

  private _valuesObservable: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  private _key: string;
  private _isEquals: (v1: any, v2: any)=>boolean;

  constructor(@Inject(APP_CONFIG) config: AppConfig) {
    this._key = config.key;
    this._isEquals = config.isEqualsFunction;
    console.log("key: "+this._key);
    this.fetchData();
  }
// constructor(key: string,isEquals: (v1: any, v2: any)=>boolean) {
//     this._key = key;
//     this._isEquals = isEquals;
//     this.fetchData();
//   }


  get values(): Observable<Array<any>> {
    return this._valuesObservable;
  }

  addValue(value: any): void {
    this._values.unshift(value);
    this.storeData();
  }

  deleteValue(value: any): void {
    let index: number = this.getIndex(value);
    if (index !== -1) {
      this._values.splice(index, 1);
    } else {
      console.log("tried to add out of bounds item");
    }

    this.storeData();
  }

  editValue(oldValue: any, newValue: any): void {
    this._values[this.getIndex(oldValue)] = newValue;

    this.storeData();
  }

  isValueExist(value: any): boolean {
    return this.getIndex(value) !== -1;
  }

  private getIndex(value: any): number {
    let index = this._values.findIndex((c) => this._isEquals(c, value));
    console.log("index: " + index);
    return index;
  }

  private storeData(): void {
    console.log(this._key);
    localStorage.setItem(this._key, JSON.stringify(this._values));
    this._valuesObservable.next(this._values);
    console.log("new observable " + JSON.stringify(this._valuesObservable.getValue()));
  }

  private fetchData(): void {
    if (localStorage.getItem(this._key) === null) {
      this._values = [];
    } else {
      console.log(localStorage.getItem(this._key));
      this._values = JSON.parse(localStorage.getItem(this._key));
    }

    console.log("return new data");
    this._valuesObservable.next(this._values)
  }

}
