// Your test script
describe('Example Protractor Test Suite', () => {
    beforeEach(() => {
      browser.waitForAngularEnabled(false);
    });
  
    it('should do something', () => {
         browser.get('http://localhost:4200/');
      });
      it('should have the correct title', () => {
        browser.get('/'); 
        browser.sleep(2000);
        expect(browser.getTitle()).toEqual('AngularProjectApp');
      });
  
    afterEach(() => {
      browser.waitForAngularEnabled(true);
    });
  });
  