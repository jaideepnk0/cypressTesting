export default class LoginPage{
    path="/login";

    //create variable for element locators
    usernameInput= "input#username";
    passwordInput= "input#password";
    loginButton= "button[type='submit']";

    //create independent methods to perform actions on elements

    visitLogin(){
        cy.visit(this.path);
    }

    typeUsername(username){
        cy.get(this.usernameInput).type(username);
    }

    typePassword(password){
        cy.get(this.passwordInput).type(password);
    }

    clickLoginButton(){
        cy.get(this.loginButton).click();
    }
}