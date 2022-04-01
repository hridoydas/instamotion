///<reference types = "cypress"/>
const homePageActions = require("../../pageObjects/pageActions/HomePageActions")


describe("Choose Brand from dropdown", ()=>{

    it("Navigate to url", ()=>{
        homePageActions.navigateToUrl;
    })

    it ("validate Title", ()=>{
        homePageActions.validateTitile.should('eq', 'Geprüfte Gebrauchtwagen mit Garantie | instamotion');
    })

    it("Accept Cookies", ()=>{
        cy.wait(2000);
        homePageActions.acceptCookies;
    })

    it ("Click on dropdown", ()=>{
        cy.wait(5000);
        homePageActions.clickBrandDropDown;    
    })

    it("Choose brand from dropdown", ()=>{
        cy.wait(2000);
        homePageActions.selectBrand;
    })

    it("Click Model dropdown", ()=>{
        homePageActions.clickModelDropDown;
        cy.wait(2000);
    })

    it("Choose model from dropdown", ()=>{
        homePageActions.selectModel;
        cy.wait(2000)
    })

    it("Submit selection", ()=>{
        homePageActions.submit;
    })

})