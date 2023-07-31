// auth-logout.e2e.spec.js
/*describe('Authentication and Logout Test', () => {
    beforeEach(() => {
      // Simulate login before each test case to ensure the user is authenticated.
      browser.get('/login'); // Navigate to the login page
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
    });
  
    afterEach(() => {
      // Simulate logout after each test case.
      // You can add the logout logic here based on your implementation.
      // For example, call a logout service or click the logout button.
      const logoutButton = element(by.buttonText('Logout'));
      logoutButton.click();
    });
  
    it('should set isAuthenticated to false after logout', () => {
      // Ensure that the user is redirected to the login page after logout.
      const isAuthenticated = false; 
      expect(isAuthenticated).toBe(false);
    });
  
    it('should not be able to use other routes after logout', () => {
      // Simulate navigating to another route after login.
      // In this example, we are navigating to the home page.
      browser.get('/home');
  
      // Expect the URL to contain '/login' after navigation because the user should be redirected to the login page.
      expect(browser.getCurrentUrl()).toContain('/home');
    });
  
 });*/
 const { browser } = require('protractor'); 

 describe('Authentication and Navigation Test', () => {
    beforeEach(() => {
      // Simulate login before each test case to ensure the user is authenticated.
      browser.get('/login'); // Navigate to the login page
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
    });
  
    it('should navigate to home page after successful login', () => {
      // Check if the user is redirected to the home page after successful login
      expect(browser.getCurrentUrl()).toContain('/home');

       // Click the Qualification link
       element(by.linkText('Qualification')).click();
       expect(browser.getCurrentUrl()).toContain('/qualification');
       browser.sleep(2000);

       // Click the Skills link
      element(by.linkText('Skills')).click();
      expect(browser.getCurrentUrl()).toContain('/skills'); 
      browser.sleep(2000); 

      //Click the projects link
      element(by.linkText('Projects')).click();
      expect(browser.getCurrentUrl()).toContain('/projects');
      browser.sleep(2000);

      //Click the Table link
      element(by.linkText('Table')).click();
      expect(browser.getCurrentUrl()).toContain('/table');
      browser.sleep(2000);

      //Click the Promise
      element(by.linkText('Promise')).click();
      expect(browser.getCurrentUrl()).toContain('/promise');
      browser.sleep(2000);

      //Click the Observable
      element(by.linkText('Observable')).click();
      expect(browser.getCurrentUrl()).toContain('/observable');
      browser.sleep(2000);
     // browser.driver.get(browser.baseUrl + '/home');
       // Logout the user to simulate not being logged in
       const logoutButton = element(by.linkText('Logout'));
       logoutButton.click();
       browser.sleep(2000); // Wait for the logout to complete
   
       // Try to access a protected route (e.g., home page) without logging in
       browser.get('/home');
   
       // Check if the user is redirected to the login page
       expect(browser.getCurrentUrl()).toContain('/login');


    });
  });
  
  