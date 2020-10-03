

export default class SecurePage{

    path = "/secure";

    //create variables for element locators

    msg = "div#flash";

    // create a method to verify secure page msg

    getMessage(){
        return cy.get(this.msg).invoke('text');
    }
}