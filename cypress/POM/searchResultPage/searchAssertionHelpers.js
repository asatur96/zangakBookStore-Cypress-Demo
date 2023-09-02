import { searchResultPage } from "./searchResultPage";
import helpers from "./helpers";

export default {
    assertContent: (item) => {
        searchResultPage.elements.searchDescription().should('have.text', item.description);
        searchResultPage.elements.searchText().should('have.text', item.searchText);
        searchResultPage.elements.searchResultsCount().should('have.text', item.count);
        searchResultPage.elements.filter().should('have.text', item.filterText);
        searchResultPage.elements.sortBy().should('have.text', item.sortBy);

        searchResultPage.clickOnSortBy();
        searchResultPage.elements.sortByDropDownItems().should('be.visible');
        helpers.collectSortByDropDownItemTexts()
            .then(dropdownItems => {
                expect(item.sortByContent).to.eql(dropdownItems);
                expect(dropdownItems).to.have.length(item.sortByContent.length);
            });
    },

    assertPrice: (option) => {
        searchResultPage.elements.foundProducts()
            .each(($item, index, $list) => {
                if (index !== $list.length - 1) {
                    helpers.comparePriceValues($item, $list[index + 1], option);
                }
            })
    },

    assertSeeMoreAndClick: (label) => {
        searchResultPage.elements.seeMoreButton().should('be.visible');
        searchResultPage.elements.seeMoreLabel().should('have.text', label);
        searchResultPage.clickSeeMore();
    }
}