const { I } = inject();
// Add in your custom step files

Given('I am on the login screen', () => {
  // From "features\basic.feature" {"line":6,"column":5}
 I.amOnPage('http://www.automationpractice.pl/index.php')
 I.click('.login')
 I.waitForElement('#email',10)
});

When('I click on Sign In', () => {
  // From "features\basic.feature" {"line":9,"column":5}
  I.click('#SubmitLogin')
});


When('I fill the email field with {string}', (email) => {
  // From "features\basic.feature" {"line":8,"column":5}
  I.fillField('#email', email)
});

When('I fill the password filed with {string}', (password) => {
  // From "features\basic.feature" {"line":9,"column":5}
  I.fillField('#passwd',secret(password))
});

When('I see {string}', (message) => {
  // From "features\basic.feature" {"line":18,"column":5}
  I.see(message);
});


