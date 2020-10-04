

export default class HomePage{

    //create variable for element locators

    buttonToTheMenu= "a[href*='mamacita'] span.btn__text";
    mamacita= "div.emotion--wrapper div.emotion--banner div.banner--content a[href*='mamacita/wallenstein']";
    addressBox= "input#address-input";
    popUpToTheMenuButton= ".btn--honest";
    acceptCookies= ".agree-cookie";
    msgSorry= "#address-error > h1";
    continueWithoutAddress= ".popup-no-address-link";


    //create independent methods to perform actions on elements

    addr= "Seidengasse 44, 1070 Wien, Austria";

    enterAddress(){
        cy.get(this.addressBox).type(this.addr).invoke('val').should('contains', 'Seidengasse 44, 1070 Wien,');
        cy.get(this.popUpToTheMenuButton).click();

    }

    continueWithoutAddr(){
        if(cy.get(this.msgSorry).invoke('text').should('contains', 'Entschuldige Bitte :-(')){
            cy.get(this.continueWithoutAddress).click();
            cy.url().should('include', 'mamacita');
        }
            
    }
}