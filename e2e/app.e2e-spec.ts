import { MyLocationsPage } from './app.po';

describe('my-locations App', () => {
  let page: MyLocationsPage;

  beforeEach(() => {
    page = new MyLocationsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to my-locations!!');
  });
});
