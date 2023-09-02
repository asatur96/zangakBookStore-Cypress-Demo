/// <reference types="cypress" />

import { searchResultPage } from "../POM/searchResultPage/searchResultPage";
import { header } from "../POM/header/header";
import helpers from "../POM/searchResultPage/helpers";

import assertionHelpers from "../POM/searchResultPage/searchAssertionHelpers";

describe('Zangak BookStore - Search Results Page', () => {

    beforeEach(() => {
        cy.viewport(1800, 1000);
        cy.visit('');
    })

    describe('Verify elements & content', () => {

        it('Verify Search Results Page should exist and be visible', () => {

            header.performSearch('text');

            searchResultPage.elements.searchDescription().should('exist').and('be.visible');
            searchResultPage.elements.searchText().should('exist').and('be.visible');
            searchResultPage.elements.searchResultsCount().should('exist').and('be.visible');
            searchResultPage.elements.filter().should('exist').and('be.visible');
            searchResultPage.elements.sortBy().should('exist').and('be.visible');
            searchResultPage.elements.resultsContainer().should('exist').and('be.visible');
        })

        it('Verify Search Results Page content: ENG', () => {
            cy.fixture('search').then((search) => {
                cy.wrap(search.elementsContent.ENG)
                    .then(item => {
                        header.changeLanguage(item.language);
                        header.performSearch(item.searchText);

                        assertionHelpers.assertContent(item);
                    })
            })
        })

        it('Verify Search Results Page content: ARM', () => {
            cy.fixture('search').then((search) => {
                cy.wrap(search.elementsContent.ARM)
                    .then(item => {
                        header.changeLanguage(item.language);
                        header.performSearch(item.searchText);

                        assertionHelpers.assertContent(item);
                    })
            })
        })

        it('Verify Search Results Page content: RUS', () => {
            cy.fixture('search').then((search) => {
                cy.wrap(search.elementsContent.RUS)
                    .then(item => {
                        header.changeLanguage(item.language);
                        header.performSearch(item.searchText);

                        assertionHelpers.assertContent(item);
                    })
            })
        })

    })

    describe('Verify sorting functions', () => {

        it('Sort from low to high: Case 1(ARM)', () => {
            cy.fixture('search').then((search) => {
                cy.wrap(search.searchProducts.case1)
                    .then(searchItem => {
                        header.changeLanguage(searchItem.language);
                        header.performSearch(searchItem.product);

                        searchResultPage.sortByPriceFromLowToHigh();

                        assertionHelpers.assertPrice("LTE");
                    })
            })
        })

        it('Sort from low to high: Case 2(ENG)', () => {
            cy.fixture('search').then((search) => {
                cy.wrap(search.searchProducts.case2)
                    .then(searchItem => {
                        header.changeLanguage(searchItem.language);
                        header.performSearch(searchItem.product);

                        searchResultPage.sortByPriceFromLowToHigh();

                        assertionHelpers.assertPrice("LTE");
                    })
            })
        })

        it('Sort from low to high: Case 3(RUS)', () => {
            cy.fixture('search').then((search) => {
                cy.wrap(search.searchProducts.case3)
                    .then(searchItem => {
                        header.changeLanguage(searchItem.language);
                        header.performSearch(searchItem.product);

                        searchResultPage.sortByPriceFromLowToHigh();

                        assertionHelpers.assertPrice("LTE");
                    })
            })
        })

        it('Sort from high to low: Case 1(ARM)', () => {
            cy.fixture('search').then((search) => {
                cy.wrap(search.searchProducts.case1)
                    .then(searchItem => {
                        header.changeLanguage(searchItem.language);
                        header.performSearch(searchItem.product);

                        searchResultPage.elements.searchResultsCount().should('contain.text', searchItem.count);

                        searchResultPage.sortByPriceFromHighToLow();

                        assertionHelpers.assertPrice("GTE");
                    })
            })
        })

        it('Sort from high to low: Case 2(ENG)', () => {
            cy.fixture('search').then((search) => {
                cy.wrap(search.searchProducts.case2)
                    .then(searchItem => {
                        header.changeLanguage(searchItem.language);
                        header.performSearch(searchItem.product);

                        searchResultPage.elements.searchResultsCount().should('contain.text', searchItem.count);

                        searchResultPage.sortByPriceFromHighToLow();

                        assertionHelpers.assertPrice("GTE");
                    })
            })
        })

        it('Sort from high to low: Case 3(RUS)', () => {
            cy.fixture('search').then((search) => {
                cy.wrap(search.searchProducts.case3)
                    .then(searchItem => {
                        header.changeLanguage(searchItem.language);
                        header.performSearch(searchItem.product);

                        searchResultPage.elements.searchResultsCount().should('contain.text', searchItem.count);

                        searchResultPage.sortByPriceFromHighToLow();

                        assertionHelpers.assertPrice("GTE");
                    })
            })
        })

    })

    describe('Verify See More button', () => {

        it('See More Button: Case 1', () => {
            cy.fixture('search').then((search) => {
                cy.wrap(search.searchProducts.case1)
                    .then(searchItem => {
                        header.changeLanguage(searchItem.language);
                        header.performSearch(searchItem.product);

                        searchResultPage.elements.searchResultsCount().should('contain.text', searchItem.count);

                        assertionHelpers.assertSeeMoreAndClick(searchItem.seeMoreLabel);
                        assertionHelpers.assertSeeMoreAndClick(searchItem.seeMoreLabel);
                        assertionHelpers.assertSeeMoreAndClick(searchItem.seeMoreLabel);
                        assertionHelpers.assertSeeMoreAndClick(searchItem.seeMoreLabel);

                        searchResultPage.elements.seeMoreButton().should('not.be.visible');
                    })
            })
        })

        it('See More Button: Case 2', () => {
            cy.fixture('search').then((search) => {
                cy.wrap(search.searchProducts.case2)
                    .then(searchItem => {
                        header.changeLanguage(searchItem.language);
                        header.performSearch(searchItem.product);

                        searchResultPage.elements.searchResultsCount().should('contain.text', searchItem.count);

                        assertionHelpers.assertSeeMoreAndClick(searchItem.seeMoreLabel);

                        searchResultPage.elements.seeMoreButton().should('not.be.visible');
                    })
            })
        })

        it('See More Button: Case 3', () => {
            cy.fixture('search').then((search) => {
                cy.wrap(search.searchProducts.case3)
                    .then(searchItem => {
                        header.changeLanguage(searchItem.language);
                        header.performSearch(searchItem.product);

                        searchResultPage.elements.searchResultsCount().should('contain.text', searchItem.count);

                        assertionHelpers.assertSeeMoreAndClick(searchItem.seeMoreLabel);

                        searchResultPage.elements.seeMoreButton().should('not.be.visible');
                    })
            })
        })

    })
})