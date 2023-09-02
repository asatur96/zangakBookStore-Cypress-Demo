/// <reference types="cypress" />

import { cartPage } from "../POM/cart/cart";
import { cartLocators } from "../POM/cart/cartLocators";
import { header } from "../POM/header/header";
import { productItem } from "../POM/productItem/productItem";
import { searchResultPage } from "../POM/searchResultPage/searchResultPage";


describe('Zangak BookStore - Test Cart', () => {
    beforeEach(() => {
        cy.viewport(1800, 1000);
        cy.visit('');
    })

    describe('Verify Empty Basket popup', () => {
        it('Verify, that basket initially is empty: ENG', () => {
            cy.fixture('cart').then(cart => {
                cy.wrap(cart.emptyBasket.ENG).then(item => {
                    header.changeLanguage(item.language);
                    cartPage.open();
                    cy.get(cartLocators.emptyBasket)
                        .should('exist')
                        .and('contain.text', item.text);
                    cartPage.closeEmptyBasket();
                })
            });
        })

        it('Verify, that basket initially is empty: ARM', () => {
            cy.fixture('cart').then(cart => {
                cy.wrap(cart.emptyBasket.ARM).then(item => {
                    header.changeLanguage(item.language);
                    cartPage.open();
                    cy.get(cartLocators.emptyBasket)
                        .should('exist')
                        .and('contain.text', item.text);
                    cartPage.closeEmptyBasket();
                })
            });
        })

        it('Verify, that basket initially is empty: RUS', () => {
            cy.fixture('cart').then(cart => {
                cy.wrap(cart.emptyBasket.RUS).then(item => {
                    header.changeLanguage(item.language);
                    cartPage.open();
                    cy.get(cartLocators.emptyBasket)
                        .should('exist')
                        .and('contain.text', item.text);
                    cartPage.closeEmptyBasket();
                })
            });
        })
    })
    

    it('Test Add to Cart functionality', () => {
        cy.fixture('cart').then(cart => {
            header.changeLanguage(cart.cartManipulation.language);
            header.performSearch(cart.cartManipulation.product);
            searchResultPage.elements.firstFoundProduct().then(
                elem => {
                    productItem.addToCard(elem);
                }
            );

            cy.wait(2000);

            cartPage.open();
            cartPage.elements.totalPrice().should('have.text', cart.cartManipulation.price1);
            cartPage.close();

            searchResultPage.sortByPriceFromLowToHigh();
            searchResultPage.elements.firstFoundProduct().then(
                elem => {
                    productItem.addToCard(elem);
                }
            );

            cartPage.open();
            cartPage.elements.totalPrice().should('have.text', cart.cartManipulation.price2);
            cartPage.close();

            searchResultPage.sortByPriceFromHighToLow();
            searchResultPage.elements.firstFoundProduct().then(
                elem => {
                    productItem.addToCard(elem);
                }
            );

            cartPage.open();
            cartPage.addProductInstanceByAuthorAndDescription(cart.cartManipulation.addProductInstance.author,
                cart.cartManipulation.addProductInstance.description);
            cartPage.elements.totalPrice().should('have.text', cart.cartManipulation.price3);

            cy.wait(2000);

            cartPage.removeProductByAuthorAndDescription(cart.cartManipulation.removeProduct.author,
                cart.cartManipulation.removeProduct.description);
            cartPage.elements.totalPrice().should('have.text', cart.cartManipulation.price4);

            cartPage.removeProductInstanceByAuthorAndDescription(cart.cartManipulation.removeProductInstance.author,
                cart.cartManipulation.removeProductInstance.description);
            cartPage.elements.totalPrice().should('have.text', cart.cartManipulation.price5);
        })

    })
})