import { header } from "./header"

export default {
    languageOptions: () => {
        let values = [];
        header.elements.changeLanguageDropDown().filter(':visible').then(
            ($dropdown) => {
                cy.wrap($dropdown).find('button').then(
                    ($el) => {
                        values.push($el.text().trim());
                        cy.log($el.text().trim())
                        cy.log(values)
                    }
                );

                cy.wrap($dropdown).find('a').each(
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


    collectMenuBarItems: () => {
        let result = [];
        header.elements.menuBar().each(menuItem => {
            result.push(menuItem.find('a').text().trim());
        })

        return cy.wrap(result);
    }
}