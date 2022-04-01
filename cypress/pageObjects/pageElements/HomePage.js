///<reference types = "cypress"/>

class HomePage{

    get acceptCookies(){
        return cy.xpath("//button[@id='onetrust-accept-btn-handler']");
    }
    
    get brandDropDown(){
        return cy.xpath("(//div[@class='sc-fFTYTi frFtxu'])[1]");
    }

    get brandFromDropDown(){
        return cy.xpath("(//li[contains(.,'BMW')])[1]");
    }

    get modelDropDown(){
        return cy.xpath("(//div[@class='sc-fFTYTi frFtxu'])[2]");
    }

    get modelFromDropDown(){
        return cy.xpath("//li[contains(.,'116')]");
    }

    get submitButton(){
        return cy.xpath("//a[@class='sc-ekkqgF HeroSearchstyled__HeroSearchButton-sc-1c6baod-3 evwfZm']");
    }
}

module.exports = new HomePage();