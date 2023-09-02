import { header } from "./header"
import helpers from "./helpers";
import "../../support/commands";

export default {
    assertLanguageOptions: (options) => {
        helpers.languageOptions()
            .then(values => {
                expect(options).to.have.members(values);
                expect(values).to.have.length(options.length);
            });
    },

    assertSelectedLanguage: (object) => {
        cy.url().then(url => {
            expect(cy.startsWith(url, object.url), true);
        })

        header.selectedLanguage().should('have.text', object.language);
    },

    assertMenuBarContent: (menuBarItems) => {
        helpers.collectMenuBarItems().then(items => {
            expect(menuBarItems).to.eql(items);
            expect(items).to.have.length(menuBarItems.length);
        });
    },

    assertLoginButton: (text) => {
        header.elements.loginButton().should('be.visible');
        header.elements.loginButton().filter(":visible").should("have.text", text);

        header.clickLoginButton();
        cy.url().then(url => {
            expect(cy.endsWith(url, 'login'), true);
        });
    },

    assertSigninButton: (text) => {
        header.elements.signinButton().should('be.visible');
        header.elements.signinButton().filter(":visible").should("have.text", text);

        header.clickSigninButton();
        cy.url().then(url => {
            expect(cy.endsWith(url, 'registration'), true);
        });
    }
}