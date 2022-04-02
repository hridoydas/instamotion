///<reference types = "cypress"/>
const featurePageActions = require("../../pageObjects/pageActions/featurePageActions");

// Given('user navigate to instamotion url', function () {
//     featurePageActions.maximizeWindow;
//     cy.wait(2000);
// });

Given('user navigate to instamotion url', function () {
    featurePageActions.navigateToUrl;
    cy.wait(2000);

});

Then('user accept cookies', function () {
    featurePageActions.acceptCookies;
    cy.wait(2000);
});


// Then('user maximize the window', function () {
//     featurePageActions.maximizeWindow;
//     cy.wait(2000);
// });

When('user verify the title', function () {
    featurePageActions.validateTitile.should('contain', 'Geprüfte Gebrauchtwagen mit Garantie | instamotion');
    cy.wait(2000);
});

Then('user click sidebar menu icon', function () {
    featurePageActions.clickSidebarMenuIcon;
    cy.wait(2000);
});

Then('user click features page', function () {
    featurePageActions.clickFeatureMenu;
    cy.wait(2000);
});

Then('user verify the the feature page', function () {
    featurePageActions.verifyFeaturePageText.should('contain', 'So funktioniert instamotion');
    cy.wait(2000);
});

Then('verify Find your financing text', function () {
    featurePageActions.findFinancing.should('contain', 'Finde Deine Finanzierung');
    cy.wait(2000);
});

Then('verify Approval without stress text', function () {
    featurePageActions.approvalWithoutStress.should('contain', "Zulassung – ohne Stress");
    cy.wait(2000);
});

Then('verify Delivery to your doorstep text', function () {
    featurePageActions.deliveryDoorstep.should('contain', 'Lieferung vor Deine Haustür');
});