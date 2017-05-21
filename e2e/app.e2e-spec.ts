import { Chatty4Page } from './app.po';

describe('chatty4 App', () => {
  let page: Chatty4Page;

  beforeEach(() => {
    page = new Chatty4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
