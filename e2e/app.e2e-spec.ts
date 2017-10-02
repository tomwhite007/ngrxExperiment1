import { NgrxExpiriment1Page } from './app.po';

describe('ngrx-expiriment1 App', () => {
  let page: NgrxExpiriment1Page;

  beforeEach(() => {
    page = new NgrxExpiriment1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Counter using ngrx');
  });
});
