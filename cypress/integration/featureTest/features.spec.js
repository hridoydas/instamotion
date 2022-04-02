///<reference types = "cypress"/>
const featurePageActions = require("../../pageObjects/pageActions/featurePageActions");


// describe("Choose Brand from dropdown", ()=>{

//     it("Navigate to url", ()=>{
//         featurePageActions.navigateToUrl;
//     })
// })


Given('user navigate to instamotion url', function test() {
    featurePageActions.navigateToUrl;
    cy.wait(2000);

});

Then('user accept cookies', function () {
    featurePageActions.acceptCookies;
    cy.wait(2000);
});


Then('user maximize the window', function () {
    featurePageActions.maximizeWindow;
    cy.wait(2000);
});

When('user verify the title', function () {
    featurePageActions.validateTitile.should('have.text', 'Geprüfte Gebrauchtwagen mit Garantie | instamotion');
    cy.wait(2000);
});


Then('user click features page', function () {
    featurePageActions.clickFeatureMenu;
    cy.wait(2000);
});

Then('user verify the the feature page', function () {
    featurePageActions.verifyFeaturePageText.should('have.text', 'So funktioniert instamotion');
    cy.wait(2000);
});

Then('verify Find your financing text', function () {
    featurePageActions.findFinancing.should('have.text', 'Finde Deine Finanzierung');
    cy.wait(2000);
});

Then('verify Approval - without stress text', function () {
    featurePageActions.approvalWithoutStress.should('have.text', 'SZulassung – ohne Stress');
    cy.wait(2000);
});

Then('verify Delivery to your doorstep text', function () {
    featurePageActions.deliveryDoorstep.should('have.text', 'Lieferung vor Deine Haustür');
});