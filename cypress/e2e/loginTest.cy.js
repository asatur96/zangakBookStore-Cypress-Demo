/// <reference types="cypress" />

import { loginPage } from "../POM/loginPage/loginPage";
import loginPageAssertionHelpers from "../POM/loginPage/loginPageAssertionHelpers";
import { header } from "../POM/header/header";
import { homePage } from "../POM/homePage/homePage";

describe('Login Page Tests', () => {
    beforeEach(() => {
        cy.viewport(1800, 1000);
        cy.visit('');
    })

    describe('Verify Login Page Content', () => {
        it('Login Page: ENG', () => {
            cy.fixture('login').then(login => {
                cy.wrap(login.pageElements.ENG).then(
                    page => {
                        header.changeLanguage(page.language);

                        homePage.navigateToLoginPage();

                        loginPageAssertionHelpers.assertPageContent(page);
                    }
                )
            })
        })

        it('Login Page: RUS', () => {
            cy.fixture('login').then(login => {
                cy.wrap(login.pageElements.RUS).then(
                    page => {
                        header.changeLanguage(page.language);

                        homePage.navigateToLoginPage();

                        loginPageAssertionHelpers.assertPageContent(page);
                    }
                )
            })
        })

        it('Login Page: ARM', () => {
            cy.fixture('login').then(login => {
                cy.wrap(login.pageElements.ARM).then(
                    page => {
                        header.changeLanguage(page.language);

                        homePage.navigateToLoginPage();

                        loginPageAssertionHelpers.assertPageContent(page);
                    }
                )
            })
        })
    })

    describe('Verify Login page required fields', () => {
        it('[NEG] Verify, email field border becomes red, when its not entered', () => {
            homePage.navigateToLoginPage();

            loginPage.enterPassword(Cypress.env('password'));
            loginPage.clickOnLoginButton();

            loginPageAssertionHelpers.assertFormClass();

        })

        it('[NEG] Verify, password field border becomes red, when its not entered', () => {
            homePage.navigateToLoginPage();

            loginPage.enterPassword(Cypress.env('password'));
            loginPage.clickOnLoginButton();

            loginPageAssertionHelpers.assertFormClass();
        })

        it('[NEG] Incorrect login with invalid email', () => {
            homePage.navigateToLoginPage();

            cy.fixture('login').then(
                login => {
                    loginPage.enterEmail(login.invalidEmail.email);
                    loginPage.enterPassword(Cypress.env('password'));
                    loginPage.clickOnLoginButton();

                    loginPageAssertionHelpers.assertIncorrectLogin(login.incorrectLogin.text);
                })
        })

        it('[NEG] Incorrect login with invalid password', () => {
            homePage.navigateToLoginPage();

            cy.fixture('login').then(
                login => {
                    loginPage.enterEmail(Cypress.env('email'));
                    loginPage.enterPassword(login.invalidPassword.password);
                    loginPage.clickOnLoginButton();

                    loginPageAssertionHelpers.assertIncorrectLogin(login.incorrectLogin.text);
                })
        })

        it('[POS] Login with valid credentials', () => {
            homePage.navigateToLoginPage();

            loginPage.enterEmail(Cypress.env('email'));
            loginPage.enterPassword(Cypress.env('password'));
            loginPage.clickOnLoginButton();

            loginPageAssertionHelpers.assertCorrectLogin();
        })
    })
})