import LoginPage from '../pages/LoginPage';
import SecurePage from '../pages/SecurePage';

const loginPage = new LoginPage();
const securePage = new SecurePage();

describe('verify login functionality', () => {

    it('should login successfully', () => {

        loginPage.visitLogin();

        loginPage.typeUsername("tomsmith");

        loginPage.typePassword("SuperSecretPassword!");

        loginPage.clickLoginButton();

        securePage.getMessage().should((actual) => {
            expect(actual).to.have.string("You logged into a secure area!");

        })



    })
})