///<reference types = "cypress"/>
const HomePage = require("../pageElements/HomePage")

class HomePageActions{

    get navigateToUrl(){
        return cy.visit("/");
    }

    get validateTitile(){
        return cy.title();
    }

    get acceptCookies(){
        HomePage.acceptCookies.click();
    }

    get clickBrandDropDown(){
        HomePage.brandDropDown.click();
    }

    get selectBrand(){
        HomePage.brandFromDropDown.click();
    }

    get clickModelDropDown(){
        HomePage.modelDropDown.click();
    }

    get selectModel(){
        HomePage.modelFromDropDown.click();
    }

    get submit(){
        HomePage.submitButton.click();
    }

}

module.exports = new HomePageActions();