// e2e/login.e2e-spec.ts
const { browser, element, by, ExpectedConditions } = require('protractor');
const EC = ExpectedConditions;


describe('User Login', () => {
  beforeEach(() => {
    browser.get('/login'); 
  });

 
  it('should log in successfully with valid credentials', () => {
    browser.get('/'); // Navigate to the login page
    const usernameInput = element(by.id('username'));
    const passwordInput = element(by.id('password'));
    const loginButton = element(by.buttonText('Login'));

    // Fill in the login form with valid credentials
    usernameInput.sendKeys('kminchelle');
    passwordInput.sendKeys('0lelplR');

    // Click the login button
    loginButton.click();

    // Wait for the authentication to complete (adjust this time according to your app's response time)
    browser.sleep(2000);

    // Expect the user to be redirected to the home page after successful login
    expect(browser.getCurrentUrl()).toContain('/home');

  });
  it('should redirect to login page for invalid credentials', () => {
    browser.get('/'); // Navigate to the login page
    const usernameInput = element(by.id('username'));
    const passwordInput = element(by.id('password'));
    const loginButton = element(by.buttonText('Login'));

    // Fill in the login form with invalid credentials
    usernameInput.sendKeys('invalid_user');
    passwordInput.sendKeys('invalid_password');

    // Click the login button
    loginButton.click();

    // Wait for the authentication to complete (adjust this time according to your app's response time)
    browser.sleep(2000);

    // Expect the user to stay on the login page and show an error message
    expect(browser.getCurrentUrl()).toContain('/login');
   });
  


  
  


  
});
