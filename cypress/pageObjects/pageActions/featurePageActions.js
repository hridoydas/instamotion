///<reference types = "cypress"/>
const featurePage = require("../pageElements/featurePage")

class featurePageActions{

    get navigateToUrl(){
        return cy.visit("/");
    }

    get validateTitile(){
        return cy.title();
    }

    get acceptCookies(){
        return featurePage.aceeptCookies.click();
    }

    get maximizeWindow(){
        return cy.viewport(1024, 768);
    }
    
    get clickFeatureMenu(){
        return featurePage.featureMenu.click();
    }

    get verifyFeaturePageText(){
        return featurePage.featurePageText.getText();
    }

    get findFinancing(){
        featurePage.findFinancing.getText();
    }

    get approvalWithoutStress(){
        featurePage.approvalWithoutStress.getText();
    }

    get deliveryDoorstep(){
        featurePage.deliveryDoorstep.getText();
    }

}

module.exports = new featurePageActions();