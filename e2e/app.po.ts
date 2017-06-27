import { browser, by, element } from 'protractor';

export class MyLocationsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-locations-root h1')).getText();
  }
}
