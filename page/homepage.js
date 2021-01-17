let HomePage = function() {
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.getUrlProyect = function(url) {
        browser.get(url);
    };

    this.enterFirstValueNumber = function(firstNumber_Value) {
        firstNumber_input.sendKeys(firstNumber_Value);
    };

    this.enterSecondValueNumber = function(secondNumber_Value) {
        secondNumber_input.sendKeys(secondNumber_Value);
    };

    this.clickGoButton = function() {
        goButton.click();
    };

    this.verifyResult = function(result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };
};
module.exports = new HomePage();