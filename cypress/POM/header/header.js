import { headerLocators } from "./headerLocators";

class Header {
    elements = {
        homeButton: () => {return cy.get(headerLocators.homeButton);},

        searchInputField: () => {return cy.get(headerLocators.searchInputField);},

        searchSubmitButton: () => {return cy.get(headerLocators.searchSubmitButton);},

        changeLanguageDropDown: () => {return cy.get(headerLocators.changeLanguageDropdown);},

        loginDropDown: () => {return cy.get(headerLocators.loginDropdown);},

        loginButton: () => {return cy.get(headerLocators.loginButton);},

        signinButton: () => {return cy.get(headerLocators.signInButton);},

        whishListButton: () => {return cy.get(headerLocators.whishListButton);},

        favoritesButton: () => {return cy.get(headerLocators.favoritesButton);},

        menuBar: () => {return cy.get(headerLocators.menuBar);}
    }

    clickHomeButton() {
        this.elements.homeButton().click();
    }

    typeInSearchField(productName) {
        this.elements.searchInputField().clear().type(productName);
    }

    clickOnSearchSubmitButton() {
        this.elements.searchSubmitButton().click();
    }

    performSearch(productName) {
        this.typeInSearchField(`${productName}{enter}`);
    }

    changeLanguage(language) {
        this.elements.changeLanguageDropDown().filter(':visible').then($dropdown => {
            cy.wrap($dropdown).find('a').each($anchor => {
                if ($anchor.text() === language) {
                    cy.wrap($anchor).click({force: true});
                }
            })
        })
    }

    selectedLanguage() {
        return this.elements.changeLanguageDropDown().filter(':visible').find('button');
    }

    navigateTo(menuBarItem) {
        this.elements.menuBar().filter(`:contains(${menuBarItem})`).click();
    }

    clickLoginDropDown() {
        this.elements.loginDropDown().filter(':visible').click();
    }

    clickLoginButton() {
        this.elements.loginButton().filter(':visible').click();
    }

    clickSigninButton() {
        this.elements.signinButton().filter(':visible').click();
    }
}

export const header = new Header();