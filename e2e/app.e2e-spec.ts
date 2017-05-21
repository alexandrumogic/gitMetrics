import { GitMetricsAppPage } from './app.po';

describe('git-metrics-app App', function() {
  let page: GitMetricsAppPage;

  beforeEach(() => {
    page = new GitMetricsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
