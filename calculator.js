// spec.js
describe('Protractor Demo App - Calculator from http://juliemr.github.io/protractor-demo/', function() {

    const urlProyect = { url: "http://juliemr.github.io/protractor-demo/" }; // url del proyecto

    it('It should have a title', function() {
        browser.get(urlProyect.url);
        expect(browser.getTitle()).toEqual('Super Calculator');
        browser.sleep(1000);
    });

    it('It should have to add', function() {
        browser.get(urlProyect.url);
        let input_one = element(by.model('first'));
        let input_two = element(by.model('second'));
        let button = element(by.css('[ng-click="doAddition()"]'));

        input_one.sendKeys('2');
        input_two.sendKeys('3');
        button.click();

        browser.sleep(2000);
    });

    it('It should show the correct result of the sum', function() {
        browser.get(urlProyect.url);

        let result = element(by.cssContainingText('.ng-binding', '5'));

        expect(result.getText().toEqual('10'));

        browser.sleep(2000);
    });
});