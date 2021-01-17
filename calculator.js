// spec.js
let homepage = require('./page/homepage.js');
let urlProyect = { url: "http://juliemr.github.io/protractor-demo/" }; // url del proyecto
describe('Protractor Demo App - Calculator from http://juliemr.github.io/protractor-demo/', function() {



    it('It should show the correct result of the sum', function() {
        homepage.getUrlProyect(urlProyect.url);
        homepage.enterFirstValueNumber(firstNumber_Value = '10');
        homepage.enterSecondValueNumber(secondNumber_Value = '10');
        homepage.clickGoButton();
        homepage.verifyResult(result = '20');
        browser.sleep(2000);
    });

    it('It should show the correct result of the operation', function() {
        homepage.getUrlProyect(urlProyect.url);
        homepage.enterFirstValueNumber(firstNumber_Value = '10');
        homepage.enterSecondValueNumber(secondNumber_Value = '2');
        homepage.clickOperator();
        homepage.selectOperator(operator = "MULTIPLICATION");
        homepage.clickGoButton();
        homepage.verifyResult(result = '20');
        browser.sleep(2000);
    });

});