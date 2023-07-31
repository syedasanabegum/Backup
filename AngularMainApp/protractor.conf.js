

exports.config = {
    // Your test scripts' location
    specs: [
      './src/e2e/app.e2e.spec.js',
      './src/e2e/login.e2e.spec.js',
      './src/e2e/logout.e2e.spec.js'
    ],
  
    // Selenium Server address
    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // Capabilities define which browser to use
    capabilities: {
      browserName: 'chrome',
    },
  
    // Base URL for your Angular application
    baseUrl: 'http://localhost:4200/',
  
    // Framework to use (Jasmine is the default)
    framework: 'jasmine',
  
    // Other configuration options...
  };
  