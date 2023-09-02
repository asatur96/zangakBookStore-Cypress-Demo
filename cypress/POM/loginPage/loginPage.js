import { loginPageLocators } from "./loginPageLocators";

class LoginPage {
    elements = {
        title: () => {return cy.get(loginPageLocators.title);},

        or: () => {return cy.get(loginPageLocators.or);},

        email: () => {return cy.get(loginPageLocators.email);},

        password: () => {return cy.get(loginPageLocators.password);},

        forgotPassword: () => {return cy.get(loginPageLocators.forgotPassword);},

        rememberMe: () => {return cy.get(loginPageLocators.rememberMe);},

        loginButton: () => {return cy.get(loginPageLocators.loginButton).filter(':visible');},

        loginButtonText: () => {return cy.get(loginPageLocators.loginButtonText);},

        registered: () => {return cy.get(loginPageLocators.registered);},

        createAccount: () => {return cy.get(loginPageLocators.createAccount);},

        incorrectLogin: () => {return cy.get(loginPageLocators.incorrectLogin);}
    }

    enterEmail(email) {
        this.elements.email().clear().type(email);
    }

    enterPassword(password) {
        this.elements.password().clear().type(password);
    }

    clickOnLoginButton() {
        this.elements.loginButton().click();
    }
}

export const loginPage = new LoginPage();