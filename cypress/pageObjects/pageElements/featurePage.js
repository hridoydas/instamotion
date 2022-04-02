///<reference types = "cypress"/>

class featurePage{

    get featureMenu(){
        return cy.xpath("(//a[@class='sc-cTjmhe dFksDh'])[3]");
    }

    get aceeptCookies(){
        return cy.xpath("//button[@id='onetrust-accept-btn-handler']");
    }

    get featurePageText(){
        return cy.xpath("//h1[@class='Headline__H1-sc-35neu2-0 gpacWi first-element']");
    }

    get findFinancing(){
        return cy.xpath("(//h3[@class='Headline__H3-sc-35neu2-2 emOag first-element'])[2]");
    }
    
    get approvalWithoutStress(){
        return cy.xpath("(//h3[@class='Headline__H3-sc-35neu2-2 emOag first-element'])[3]");
    }

    get deliveryDoorstep(){
        return cy.xpath("(//h3[@class='Headline__H3-sc-35neu2-2 emOag first-element'])[4]");
    }

}

module.exports = new featurePage();