import HomePage from '../pages/HomePage';

const homePage = new HomePage();

export default class mamacita{

    desserts= "div[title='Desserts']";
    darkChocoBrownie= "a[title='Dark Chocolate Brownie']";

    nachos= "div[title='Beilagen & Nachos']";
    pinkColeslaw= "a[title='Pink Coleslaw']";

    goToMamacitaProductPage(){
        cy.visit("/speisekarte/mamacita/wallenstein/?noaddress=true&p=1");
    }

    addChocoBrownieToCart(){
        cy.get(this.desserts).click({force:true});
        cy.get(this.darkChocoBrownie).click();
        homePage.enterAddress();
        cy.log("the rush is currently so high that we cannot temporarily accept any further orders. Try again in 5 minutes");
        cy.get(homePage.continueWithoutAddress).click();
    }

    addPinkColeslawToCart(){
        cy.get(this.nachos).click({force:true});
        cy.get(this.pinkColeslaw).first().click();
        homePage.enterAddress();
        cy.log("the rush is currently so high that we cannot temporarily accept any further orders. Try again in 5 minutes");
    }
}