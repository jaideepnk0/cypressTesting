import HomePage from '../pages/HomePage';

const homePage = new HomePage();

describe('verify add to cart functionality for Mamacita brand', () => {

    it('should click on "To The Menu" button', () => {
        cy.visit("/").title().should('eq', 'Clubkitchen- Dein Lieferservice für die besten Onlinerestaurants | Clubkitchen');
        cy.get(homePage.buttonToTheMenu).click();
    })

    it('should enter address amc click on "tothe menu" button', () => {
        cy.get(homePage.acceptCookies).click();
        homePage.enterAddress();
    })

    it('should verify message of "Sorry"', () => {
        cy.get(homePage.msgSorry).invoke('text').should('contains', 'Entschuldige Bitte :-(')
    })

    it('should click on "continue without an address"', () => {
        homePage.continueWithoutAddr();
    })
})
