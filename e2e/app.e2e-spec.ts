import { JamiClPage } from './app.po';

describe('jami-cl App', function() {
  let page: JamiClPage;

  beforeEach(() => {
    page = new JamiClPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
