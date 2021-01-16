// spec.js
describe('Protractor Demo App - Calculator from http://juliemr.github.io/protractor-demo/', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');

        expect(browser.getTitle()).toEqual('Super Calculator');
        browser.sleep(2000);
    });
});