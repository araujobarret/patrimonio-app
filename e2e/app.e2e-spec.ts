import { PatrimonioAppPage } from './app.po';

describe('patrimonio-app App', function() {
  let page: PatrimonioAppPage;

  beforeEach(() => {
    page = new PatrimonioAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
