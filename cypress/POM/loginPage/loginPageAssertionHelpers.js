import { header } from "../header/header";
import { loginPage } from "./loginPage";

export default {
    assertPageContent(page) {
        loginPage.elements.title().should('have.text', page.title);
        loginPage.elements.or().should('have.text', page.or);
        loginPage.elements.email().siblings('label').should('have.text', page.email);
        loginPage.elements.password().siblings('label').should('have.text', page.password);
        loginPage.elements.forgotPassword().should('have.text', page.forgotPassword);
        loginPage.elements.rememberMe().siblings('label').should('have.text', page.rememberMe);
        loginPage.elements.loginButtonText().filter(':visible').should('have.text', page.login);
        loginPage.elements.registered().should('have.text', page.areYouRegistered);
        loginPage.elements.createAccount().should('have.text', page.createAccount);
    },

    assertFormClass() {
        loginPage.elements.email().parent().parent().should('have.class', 'was-validated')
    },

    assertIncorrectLogin(text) {
        loginPage.elements.incorrectLogin().should('be.visible').and('have.text', text);
    },

    assertCorrectLogin() {
        cy.url().then(
            url => {
                expect(url).to.be.eq(Cypress.env('baseUrl'));
            })
        header.elements.loginDropDown().should('have.class', 'dropdown-logging');
    }
}