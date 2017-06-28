
import {AppConfig} from "./app.cofig.interface";
const equals = function(v1: any, v2: any)  {
  if (!v1.hasOwnProperty('name') || !v2.hasOwnProperty('name')) {
    return false
  }
  return v1['name'] === v2['name'];
};
export const CATEGORY_DI_CONFIG: AppConfig = {
  key: 'categories',
  isEqualsFunction: equals
};

export const LOCATION_DI_CONFIG: AppConfig = {
  key: 'locations',
  isEqualsFunction: equals
};
