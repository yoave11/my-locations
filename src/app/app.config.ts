import {InjectionToken} from "@angular/core";
import {AppConfig} from "./app.cofig.interface";

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
export let equals =  function(v1: any, v2: any)  {
  if (!v1.hasOwnProperty('name') || !v2.hasOwnProperty('name')) {
    return false
  }
  return v1['name'] === v2['name'];
};
