import { cartLocators } from "./cartLocators";

class Cart {

    elements = {
        totalPrice: () => {return cy.get(cartLocators.totalPrice);},
        getProductInstanceList: () => {return cy.get(cartLocators.basketItemList);}
    }

    open() {
        cy.get(cartLocators.cartOpenButton).click();
    }

    close() {
        cy.get(cartLocators.cartCloseButton).click();
    }

    closeEmptyBasket() {
        cy.get(cartLocators.emptyBasketCloseButton).filter(':visible').click();
    }

    addProductInstanceByAuthorAndDescription(author, description) {
        this.elements.getProductInstanceList()
            .contains(description)
            .parent()
            .siblings('div')
            .contains(author)
            .siblings()
            .find(cartLocators.append)
            .click();
    }

    addProductInstanceByIndex(index) {
        cy.get(`${cartLocators.basketItem}${index}`)
          .find(cartLocators.append)
          .click();
    }

    removeProductInstanceByAuthorAndDescription(author, description) {
        this.elements.getProductInstanceList()
            .contains(description)
            .parent()
            .siblings('div')
            .contains(author)
            .siblings()
            .find(cartLocators.prepend)
            .click();
    }

    removeProductInstance(index) {
        cy.get(`${cartLocators.basketItem}${index}`)
          .find(cartLocators.prepend)
          .click();
    }

    removeProductByAuthorAndDescription(author, description) {
        this.elements.getProductInstanceList()
            .contains(description)
            .parent()
            .siblings('div')
            .contains(author)
            .parent()
            .parent()
            .siblings()
            .find(cartLocators.removeProduct)
            .click();
    }

    removeProduct(index) {
        cy.get(`${cartLocators.basketItem}${index}`)
          .find(cartLocators.removeProduct)
          .click();
    }
}

export const cartPage = new Cart();