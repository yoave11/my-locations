import { InjectionToken } from '@angular/core';
import {AppConfig} from "./app.cofig.interface";

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');
