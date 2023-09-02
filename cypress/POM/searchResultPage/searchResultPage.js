import { searchResultPageLocators } from "./searchResultPageLocators";

class SearchResultPage {
    elements = {
        searchDescription: () => {return cy.get(searchResultPageLocators.searchDescription);},

        searchText: () => {return cy.get(searchResultPageLocators.searchText);},

        searchResultsCount: () => {return cy.get(searchResultPageLocators.searchResultsCount);},

        filter: () => {return cy.get(searchResultPageLocators.filter);},

        sortBy: () => {return cy.get(searchResultPageLocators.sortBy);},

        sortByDropDownItems: () => {return cy.get(searchResultPageLocators.sortByDropDownItems);},

        resultsContainer: () => {return cy.get(searchResultPageLocators.resultsContainer);},
        
        foundProducts: () => {return cy.get(searchResultPageLocators.product);},

        firstFoundProduct: () => {return cy.get(searchResultPageLocators.product).first();},

        seeMoreButton: () => {return cy.get(searchResultPageLocators.seeMoreButton, {timeout: 10000});},

        seeMoreLabel: () => {return cy.get(searchResultPageLocators.seeMoreLabel);}
    }

    clickOnSortBy() {
        this.elements.sortBy().filter(':visible').click();
    }

    sortByPriceFromLowToHigh() {
        this.clickOnSortBy();

        cy.get(searchResultPageLocators.fromLowToHigh, {timeout: 20000}).parent().click({force: true});
    }

    sortByPriceFromHighToLow() {
        this.clickOnSortBy();

        cy.get(searchResultPageLocators.fromHighToLow, {timeout: 15000}).parent().click({force: true});
    }

    clickSeeMore() {
        this.elements.seeMoreButton().click();
    }
}

export const searchResultPage = new SearchResultPage();