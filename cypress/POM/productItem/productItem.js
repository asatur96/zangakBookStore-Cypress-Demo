import { productItemLocators } from "./productItemLocators";

class ProductItem {

    getProductItemByIndex(index) {
        return cy.get(productItemLocators.item).eq(index);
    }

    description(elem) {
        return cy.get(elem).find(productItemLocators.description);
    }

    author(elem) {
        cy.get(elem).find(productItemLocators.author);
    }

    price(elem) {
        return cy.get(elem).find(productItemLocators.price);
    }

    addToCard(elem) {
        cy.get(elem).find(productItemLocators.addToCart).click();
    }
}

export const productItem = new ProductItem();