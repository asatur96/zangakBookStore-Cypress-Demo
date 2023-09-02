import { searchResultPage } from "./searchResultPage";
import { productItem } from "../productItem/productItem";

export default {
    collectSortByDropDownItemTexts: () => {
        let values = [];
        searchResultPage.elements.sortByDropDownItems().filter(':visible').then(
            ($items) => {
                cy.wrap($items).find('label').each(
                    ($el) => {
                        values.push($el.text().trim());
                        cy.log($el.text().trim())
                        cy.log(values)
                    }
                );
            }
        );

        return cy.wrap(values);
    },

    comparePriceValues: (elem1, elem2, option="LTE") => {
        productItem.price(elem1).invoke('text').then($elem1 => {
            productItem.price(elem2).invoke('text').then($elem2 => {
                const current = new Number($elem1.split(' ')[0]);
                const next = new Number($elem2.split(' ')[0]);

                cy.log(`${$elem1} ${$elem2}`);
                cy.log(current + " " + next);
                
                if (option === "LTE") {
                    expect(current).to.be.at.most(next);
                } else if (option === "GTE") {
                    expect(current).to.be.at.least(next);
                }
                
            })
        })
    }
}