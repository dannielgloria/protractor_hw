let HomePage = function() {
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let operator = element(by.model('operator'));
    let selectOperationModulo = element(by.xpath(".//option[@value= 'MODULO']"));
    let selectOperationDivision = element(by.xpath(".//option[@value= 'DIVISION']"));
    let selectOperationAddition = element(by.xpath(".//option[@value= 'ADDITION']"));
    let selectOperationSubstraction = element(by.xpath(".//option[@value= 'SUBTRACTION']"));
    let selectOperationMultiplication = element(by.xpath(".//option[@value= 'MULTIPLICATION']"));


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

    this.clickOperator = function() {
        operator.click();
    };


    this.selectOperator = function() {
        selectOperation.click();
    };

    this.selectOperator = function(operator) {
        switch (operator) {
            case "MODULO":
                selectOperationModulo.click();
                break;

            case "DIVISION":
                selectOperationDivision.click();
                break;

            case "ADDITION":
                selectOperationAddition.click();
                break;

            case "SUBTRACTION":
                selectOperationSubstraction.click();
                break;

            case "MULTIPLICATION":
                selectOperationMultiplication.click();
                break;

            default:
                text = "Unidentified operation";
        }
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