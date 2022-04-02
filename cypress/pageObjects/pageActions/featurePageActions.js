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

    get clickSidebarMenuIcon(){
        return featurePage.sidebarMenuIcon.click();
    }
    
    get clickFeatureMenu(){
        return featurePage.featureMenu.click();
    }

    get verifyFeaturePageText(){
        return featurePage.featurePageText;
    }

    get findFinancing(){
        return featurePage.findFinancing;
    }

    get approvalWithoutStress(){
        return featurePage.approvalWithoutStress;
    }

    get deliveryDoorstep(){
        return featurePage.deliveryDoorstep;
    }

}

module.exports = new featurePageActions();