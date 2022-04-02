///<reference types = "cypress"/>

class featurePage{

    get sidebarMenuIcon(){
        // return cy.xpath("//div[@class='sc-cqpYsc feYebt']");
        return cy.get('.kntpJz > .sc-kgoBCf');
    }
    get featureMenu(){
        return cy.get('.sc-dyGzUR > [href="/deine-vorteile/so-funktionierts"]');
    }

    get aceeptCookies(){
        return cy.xpath("//button[@id='onetrust-accept-btn-handler']");
    }

    get featurePageText(){
        return cy.xpath("//h1[@class='Headline__H1-sc-35neu2-0 gpacWi first-element']");
    }

    get findFinancing(){
        return cy.contains('Finde Deine Finanzierung');
    }
    
    get approvalWithoutStress(){
        return cy.contains("Zulassung – ohne Stress")
        // console.log(cy.get(':nth-child(3) > .sc-eNNmBn > .sc-eEieub > .sc-RbTVP > .ListWithDescription__Title-ul031b-4'));
    }

    get deliveryDoorstep(){
        return cy.contains('Lieferung vor Deine Haustür');
    }

}

module.exports = new featurePage();